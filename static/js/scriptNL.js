const main = document.querySelector("#main")
const success = document.querySelector("#success-container")
const submitBtn = document.querySelector("#submitBtn")
const emailInput = document.querySelector("#email")
const nameInput = document.querySelector("#name")

submitBtn.addEventListener("click", () => {
    main.style="display:none"
    success.style="display:flex"
})

function submitForm(event) {
    event.preventDefault()
    console.log("clicou")
    const email = document.querySelector("#email").value
    const name = document.querySelector("#name").value
    const data = {
        email: email,
        name: name
    }
    fetch('http://127.0.0.1:5000/cadastro', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => data);
}