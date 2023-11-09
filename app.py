import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from flask import Flask, render_template, request, redirect
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "criptoon"

mysql = MySQL(app)

@app.route("/")
def index():
    return render_template('index.html')
    

@app.route("/cadastro", methods=["POST"])
def cadastro():
    data = request.get_json()
    print(data)
    return ()




# host = "smtp.gmail.com"
# port = "587"
# login = "criptoon.empresa@gmail.com"
# senha = "criptoon123456"

# server = smtplib.SMTP(host, port)

# server.ehlo()
# server.starttls()

# server.login(login, senha)

if __name__ == "__main__":
    app.run(host= "0.0.0.0", port=5000)