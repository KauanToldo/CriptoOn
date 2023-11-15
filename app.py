import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import Flask, render_template, request
import pymysql
from flask_cors import CORS

# Criando instância do app flask
app = Flask(__name__)

# Criando conexão com o banco de dados
conexao = pymysql.connect(db="criptoon", user="root", password="")
CORS(app)

# Variaveis de ambiente para o envio de email
login = "criptoon.empresa@gmail.com"
senha = "vjbwrtqbkepmxvch"

# Rota raiz
@app.route("/")
def index():
    return render_template('index.html')

# Rota da página do newsletter
@app.route('/newsletter')
def newsletter():
    return render_template('cadastro.html')
    
# Rota de cadastro
@app.route("/cadastro", methods=["POST"])
def cadastro():
    data = request.get_json()
    name = data['name']
    email = data['email']
    cursor = conexao.cursor()
    # Inserindo dados do usuário no banco
    cursor.execute("SELECT * FROM cadastros WHERE email = %s",(email))
    resultado = cursor.fetchone()
    if resultado:
        return {"error": "O email inserido já está cadastrado"}, 400
    cursor.execute("INSERT INTO cadastros(nome, email) VALUES(%s, %s)",(name, email))
    conexao.commit()
    # Criando email
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "CriptoON: Cadastro realizado!"
    msg['From'] = login
    msg['To'] = email
    html = f"<html><body><div style='margin: auto; background-color:black; padding:20px; color:white; width: 400px; border-radius: 25px;'><h1 style='font-size: 24px; text-align: center; color: #DAA520; font-weight: bold; text-transform: uppercase'>Cadastro concluído</h1><hr style='background-color: #DAA520'><p style='margin-top: 25px; text-align: justify; color: white'>Olá, {name}! Seu cadastro na CriptoON foi realizado com sucesso, a partir de agora receberá atualizações sobre todas as novidades do mundo das criptomoedas!</p><p>Agradecemos pela sua preferência.</p><p>Att. Equipe CriptoON</p></div></body></html>"
    part2 = MIMEText(html, 'html')
    msg.attach(part2)
    # Estabelecendo conexão com o servidor SMTP
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    # Logando na conta google e enviando email
    server.login(login, senha)
    server.sendmail(login, email, msg.as_string())
    return (data)

# Rodando servidor
if __name__ == "__main__":
    app.run(host= "0.0.0.0", port=5000)