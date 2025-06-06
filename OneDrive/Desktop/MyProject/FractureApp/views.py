from django.shortcuts import render
from django.template import RequestContext
from django.contrib import messages
from django.http import HttpResponse
import os
import pymysql
from django.core.files.storage import FileSystemStorage
from datetime import date
import matplotlib.pyplot as plt
import io
import base64
import numpy as np
import hashlib
import torch
import cv2
import pathlib
from pathlib import Path
pathlib.PosixPath = pathlib.WindowsPath

global uname
model = torch.hub.load('yolov5', 'custom', path='model/best.pt', force_reload=True,source='local')

def predict(filename):
    global model
    img = cv2.imread(filename)
    img = cv2.resize(img, (512, 512))
    results = model(img)
    results.xyxy[0]  # im predictions (tensor)
    out = results.pandas().xyxy[0]  # im predictions (pandas)
    print(out)
    result = "No Fracture Found"
    if len(out) > 0:
        for i in range(len(out)):
            xmin = int(out['xmin'].ravel()[i])
            ymin = int(out['ymin'].ravel()[i])
            xmax = int(out['xmax'].ravel()[i])
            ymax = int(out['ymax'].ravel()[i])
            name = out['name'].ravel()[i]
            confidence = float(out['confidence'].ravel()[i])
            if confidence > 0.30:
                result = name
                cv2.rectangle(img, (xmin, ymin), (xmax, ymax), (255, 0, 0), 2)
                cv2.putText(img, name, (xmin, ymin-20), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (0, 255, 0), 2)
    return img, result

def UploadXrayAction(request):
    if request.method == 'POST':
        global uname
        today = str(date.today())
        admin = request.POST.get('t1', '')  # Changed to '' (empty string) as the default value instead of False
        image = request.FILES['t2']
        imagename = request.FILES['t2'].name
        fs = FileSystemStorage()

        # Remove existing file if it already exists
        if os.path.exists('FractureApp/static/xray/' + imagename):
            os.remove('FractureApp/static/xray/' + imagename)
        
        # Save the uploaded image
        filename = fs.save('FractureApp/static/xray/' + imagename, image)

        # Perform fracture prediction
        img, result = predict('FractureApp/static/xray/' + imagename)
        
        # Remove temporary image after processing
        os.remove('FractureApp/static/xray/' + imagename)
        
        # Save the processed image
        cv2.imwrite('FractureApp/static/xray/' + imagename, img)

        # Database insertion with string values for admin
        db_connection = pymysql.connect(
            host='127.0.0.1', port=3306, user='root', password='Manthu@2605', database='fracture', charset='utf8')
        db_cursor = db_connection.cursor()

        # SQL query to insert data
        student_sql_query = "INSERT INTO patient_data(username, xray_file, detection_result, upload_date, permit_admin) " \
                             "VALUES('" + uname + "','" + imagename + "','" + result + "','" + today + "','" + admin + "')"
        db_cursor.execute(student_sql_query)
        db_connection.commit()

        # Convert the result image to a base64 string
        plt.imshow(img)
        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')
        plt.close()
        img_b64 = base64.b64encode(buf.getvalue()).decode()

        # Return the result as part of the response
        context = {'data': 'Stains ' + result + "<br/>Fracture result successfully saved in Database", 'img': img_b64}
        return render(request, 'PatientScreen.html', context)


def ViewPatientReport(request):
    if request.method == 'GET':
        global uname
        output = ''
        output+='<table border=1 align=center width=100%><tr><th><font size="" color="black">Patient Name</th><th><font size="" color="black">X-Ray File Name</th>'
        output+='<th><font size="" color="black">Detection Result</th><th><font size="" color="black">Upload Date</th>'
        output+='<th><font size="" color="black">Permitted Admin</th>'  
        output+='<th><font size="" color="black">Image</th><th></tr>'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select * from patient_data where permit_admin='"+uname+"'")  
            rows = cur.fetchall()
            output+='<tr>'
            for row in rows:
                output+='<tr><td><font size="" color="black">'+row[0]+'</td><td><font size="" color="black">'+str(row[1])+'</td>'
                output+='<td><font size="" color="black">'+row[2]+'</td><td><font size="" color="black">'+row[3]+'</td>'
                output+='<td><font size="" color="black">'+row[4]+'</td>'
                output+='<td><img src="static/xray/'+row[1]+'" height="300" width="300"/></td></tr>'               
        output+= "</table></br></br></br></br>"        
        context= {'data':output}
        return render(request, 'AdminScreen.html', context)  

def ViewPastResult(request):
    if request.method == 'GET':
        global uname
        output = ''
        output+='<table border=1 align=center width=100%><tr><th><font size="" color="black">Patient Name</th><th><font size="" color="black">X-Ray File Name</th>'
        output+='<th><font size="" color="black">Detection Result</th><th><font size="" color="black">Upload Date</th>'
        output+='<th><font size="" color="black">Permitted Admin</th>'  
        output+='<th><font size="" color="black">Image</th><th></tr>'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:
            cur = con.cursor()
            cur.execute("select * from patient_data where username='"+uname+"'")
            rows = cur.fetchall()
            output+='<tr>'
            for row in rows:
                output+='<tr><td><font size="" color="black">'+row[0]+'</td><td><font size="" color="black">'+str(row[1])+'</td>'
                output+='<td><font size="" color="black">'+row[2]+'</td><td><font size="" color="black">'+row[3]+'</td>'
                output+='<td><font size="" color="black">'+row[4]+'</td>'
                output+='<td><img src="static/xray/'+row[1]+'" height="300" width="300"/></td></tr>'               
        output+= "</table></br></br></br></br>"        
        context= {'data':output}
        return render(request, 'PatientScreen.html', context)      

def AdminLogin(request):  
    if request.method == 'GET':
       return render(request, 'AdminLogin.html', {})  

def PatientLogin(request):
    if request.method == 'GET':
       return render(request, 'PatientLogin.html', {})    

def Register(request):
    if request.method == 'GET':
       return render(request, 'Register.html', {})

def index(request):
    if request.method == 'GET':
       return render(request, 'index.html', {})

def UploadXray(request):
    if request.method == 'GET':
        output = '<tr><td><font size='' color="black"><b>Admin&nbsp;Permission</b></td><td><select name="t1">'
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:    
            cur = con.cursor()
            cur.execute("select username FROM register where user_role='Admin'")  # Changed 'Doctor' to 'Admin'
            rows = cur.fetchall()
            for row in rows:
                output += '<option value="'+row[0]+'">'+row[0]+'</option>'
        output += "</select></td></tr>"
        context= {'data1':output}
        return render(request, 'UploadXray.html', context)    

def PatientLoginAction(request):
    if request.method == 'POST':
        global uname, pin
        username = request.POST.get('t1', False)
        password = request.POST.get('t2', False)
        password = hashlib.md5(password.encode()).hexdigest()
        index = 0
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:    
            cur = con.cursor()
            cur.execute("select username, password FROM register")
            rows = cur.fetchall()
            for row in rows:
                if row[0] == username and password == row[1]:
                    uname = username
                    index = 1
                    break        
        if index == 1:
            context= {'data':'welcome '+username}
            return render(request, 'PatientScreen.html', context)
        else:
            context= {'data':'login failed'}
            return render(request, 'PatientLogin.html', context)        

def AdminLoginAction(request): 
    if request.method == 'POST':
        global uname, pin
        username = request.POST.get('t1', False)
        password = request.POST.get('t2', False)
        password = hashlib.md5(password.encode()).hexdigest()
        index = 0
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:    
            cur = con.cursor()
            cur.execute("select username, password FROM register")
            rows = cur.fetchall()
            for row in rows:
                if row[0] == username and password == row[1]:
                    uname = username
                    index = 1
                    break        
        if index == 1:
            context= {'data':'welcome '+username}
            return render(request, 'AdminScreen.html', context)  
        else:
            context= {'data':'login failed'}
            return render(request, 'AdminLogin.html', context)  

def RegisterAction(request):
    if request.method == 'POST':
        username = request.POST.get('t1', False)
        password = request.POST.get('t2', False)
        contact = request.POST.get('t3', False)
        email = request.POST.get('t4', False)
        address = request.POST.get('t5', False)
        usertype = request.POST.get('t6', False)
        password = hashlib.md5(password.encode()).hexdigest()
        status = "none"
        con = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
        with con:    
            cur = con.cursor()
            cur.execute("select username FROM register")
            rows = cur.fetchall()
            for row in rows:
                if row[0] == username:
                    status = "Username already exists"
                    break
        if status == "none":
            db_connection = pymysql.connect(host='127.0.0.1',port = 3306,user = 'root', password = 'Manthu@2605', database = 'fracture',charset='utf8')
            db_cursor = db_connection.cursor()
            student_sql_query = "INSERT INTO register(username,password,contact_no,email,address,user_role) VALUES('"+username+"','"+password+"','"+contact+"','"+email+"','"+address+"','"+usertype+"')"
            db_cursor.execute(student_sql_query)
            db_connection.commit()
            print(db_cursor.rowcount, "Record Inserted")
            if db_cursor.rowcount == 1:
                status = "Account created you can login with "+username
        context= {'data': status}
        return render(request, 'Register.html', context)
