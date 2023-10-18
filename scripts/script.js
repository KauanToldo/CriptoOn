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

  window.onscroll = () => {
    document.querySelectorAll('.reveal').forEach(e => {
      if (e.getBoundingClientRect().top < window.innerHeight - 100) {
        e.classList.add('active');
      } else {
        e.classList.remove('active');
      }
    })
  }

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

  window.addEventListener("scroll", function() {
    var viewportHeight = window.innerHeight;
    
    if (window.scrollY > 0.9 * viewportHeight) {
        document.getElementById("header-container").style = "background-color: black !important; color: white !important";
        document.getElementById("navbar-aberta").style = "background-color: black !important";
        document.querySelectorAll(".links").style = "color: white !important"
    } else {
        document.getElementById("header-container").style = "background-color: #f5f4f4aa";
        document.getElementById("navbar-aberta").style = "background-color: #f5f4f4aa";
        document.querySelectorAll(".links").style = "color: black"
    }
});


const btnNavbarMobile = document.querySelector(".btn-navbar-mobile")
const sidebarMobile = document.querySelector("#sidebar-aberta-container")
const btnCloseSidebar = document.querySelector("#btn-close-sidebar")

btnNavbarMobile.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})

btnCloseSidebar.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})

