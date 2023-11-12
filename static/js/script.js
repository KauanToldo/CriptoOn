// Conversão em tempo real de criptomoedas via API(CoinGecko)
function converter() {
  const amount = document.getElementById('amount').value;
  const coin = document.getElementById('coin').value;
  const currency = document.getElementById('currency').value;
  const resultado = document.getElementById('resultado');
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;
  if (amount <= 0) {
    resultado.innerHTML = "Informe uma quantidade valida!"
    return
  }
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const price = data[coin][currency]
      const priceAmount = price * amount
      const formattedPrice = new Number(priceAmount).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      const currencySymbols = {
        'brl': 'R$',
        'usd': 'US$',
        'eur': '€'
      };
      const currencySymbol = currencySymbols[currency.toLowerCase()];
      resultado.innerHTML = `${amount} ${coin} está valendo ${currencySymbol}${formattedPrice}`;
    })
    .catch(error => {
      console.error(error);
      resultado.innerHTML = 'Erro ao converter a criptomoeda.';
    });
}

// Animação "revelar" das seções
window.onscroll = () => {
  document.querySelectorAll('.reveal').forEach(e => {
    if (e.getBoundingClientRect().top < window.innerHeight - 100) {
      e.classList.add('active');
    } else {
      e.classList.remove('active');
    }
  })
}


// Evento de abrir e fechar navbar desktop
const navbarBtn = document.querySelector("#navbar")
const navbar = document.querySelector("#navbar-aberta")

navbarBtn.addEventListener("mouseover", () => {
  navbar.classList.toggle("fechada")
  navbar.classList.toggle("aberta")
})

navbar.addEventListener("mouseout", () => {
  navbar.classList.toggle("fechada")
  navbar.classList.toggle("aberta")
})


// Evento de troca de cor do header
window.addEventListener("scroll", function() {
  var viewportHeight = window.innerHeight;
    
  if (window.scrollY > 0.9 * viewportHeight) {
    document.getElementById("header-container").style = "background-color: black !important; color: white !important; box-shadow: 0px 2px 6px black";
    document.getElementById("navbar-aberta").style = "background-color: black !important";
    document.getElementById("navbutton1").style = "color: white";
    document.getElementById("navbutton2").style = "color: white";
    document.getElementById("navbutton3").style = "color: white";
  } else {
    document.getElementById("header-container").style = "background-color: #f5f4f4aa";
    document.getElementById("navbar-aberta").style = "background-color: #f5f4f4aa";
    document.getElementById("navbutton1").style = "color: black";
    document.getElementById("navbutton2").style = "color: black";
    document.getElementById("navbutton3").style = "color: black";
  }
});


// Evento de abrir e fechar sidebar mobile
const btnNavbarMobile = document.querySelector(".btn-navbar-mobile")
const sidebarMobile = document.querySelector("#sidebar-aberta-container")
const btnCloseSidebar = document.querySelector("#btn-close-sidebar")

btnNavbarMobile.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})

btnCloseSidebar.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})


// Carossel da evolução das moedas
// const backBtn2 = document.querySelector("#backBtn2")
// const nextBtn2 = document.querySelector("#nextBtn2")
// const indicators = document.querySelectorAll(".indicator")
// let condition2 = 0
// let texts = [

// ]
// let titles = [

// ]
// let icons2 = [

// ]

// backBtn2.addEventListener("click", () => {

// })
