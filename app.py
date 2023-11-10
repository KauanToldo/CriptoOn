import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import Flask, render_template, request
import pymysql

# Criando instância do app flask
app = Flask(__name__)

# Criando conexão com o banco de dados
conexao = pymysql.connect(db="criptoon", user="root", password="")


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
    print(data)
    name = data['name']
    email = data['email']
    cursor = conexao.cursor()
    # Inserindo dados do usuário no banco
    cursor.execute("INSERT INTO cadastros(nome, email) VALUES(%s, %s)",(name, email))
    conexao.commit()
    conexao.close()
    # Criando email
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "CriptotON: Cadastro realizado!"
    msg['From'] = login
    msg['To'] = email
    html = '<html><body><p>Seu cadastro na CriptoON foi realizado com sucesso, a partir de agora receberá atualizações sobre todas as novidades do mundo das criptomoedas!</p></body></html>'
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