const main = document.querySelector("#main")
const success = document.querySelector("#success-container")
const submitBtn = document.querySelector("#submitBtn")
const emailInput = document.querySelector("#email")
const nameInput = document.querySelector("#name")

function submitForm(event) {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const name = document.querySelector("#name").value
    const dataUser = {
        email: email,
        name: name
    }
    fetch('http://127.0.0.1:5000/cadastro', {
      method: 'POST',
      body: JSON.stringify(dataUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
        return
      }
      main.style="display:none"
      success.style="display:flex"
    })
    .catch(error => {
      console.error('Erro na requisição:', error.message);
    })
}