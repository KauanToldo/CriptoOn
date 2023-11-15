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


// Carrossel da evolução das moedas
const backBtn2 = document.querySelector("#backBtn2")
const nextBtn2 = document.querySelector("#nextBtn2")
const indicators = document.querySelectorAll(".indicator")
const titlesMoedas = document.querySelector("#title-moedas")
const textMoedas = document.querySelector("#text-moedas")
const imgMoedas = document.querySelector("#moedas-img")
let condition2 = 0
let texts = [
    "Inicialmente as moedas metálicas surgiram como um instrumento de troca favorável devido seu material resistente, o qual podia ser estocado sem deteriorar. esses materiais variavam entre ferro, cobre, bronze, ouro e prata. contudo, foi identificado um problema com a circulação dessas moedas por conta da necessidade de transportar grandes quantias da mesma. tendo em vista as dificuldades e riscos de transporte, foram criadas instituições responsáveis por armazenar essas moedas, cujas forneciam um certificado que atuava como comprovante da quantia reservada.",
    "Tendo em vista os problemas decorrentes do sistema monetário baseado em metais preciosos, surgiu a moeda papel. Ela foi uma forma de contornar os inconvenientes da moeda metálica, mantendo a característica de instrumentos monetários mais flexíveis e facilitando a efetivação de operações de crédito. Contudo as relações comerciais só seriam desenvolvidas caso essa nova foma de pagamento passasse a ser aceita de forma ampla. Em seguida surgem os certificados de depósito, instituindo a moeda papel com possibilidade de conversibilidade.",
    "Após a popularização da moeda-papel, as instituições emissoras de certificados de depósito perceberam que o lastro total era desnecessário, pois os detentores não buscavam a reconversão simultânea. A confiança nas instituições permitiu a emissão de certificados com lastro inferior a 100%, originando o papel-moeda. O papel-moeda evoluiu, abandonando gradualmente a necessidade de posse de metais para emissão. Desde 1971, com o fim do lastro do dólar em ouro, os sistemas monetários internacionais operam de maneira puramente fiduciária.",
    "No século XIX, na Inglaterra, a moeda bancária surgiu acidentalmente, baseada em depósitos monetários em instituições bancárias. Movimentada por cheques, essa forma de moeda causou uma expansão significativa dos meios de pagamento. Com a evolução digital, a moeda bancária tornou-se predominantemente virtual, existindo como arquivos nos servidores bancários. Atualmente, a extensa utilização da moeda bancária, aliada à moeda fiduciária, reflete um processo de desmaterialização, afastando-se cada vez mais de representações físicas como produtos ou metais."
]
let titles = [
    "MOEDA METÁLICA","MOEDA PAPEL","MOEDA FIDUCIÁRIA","MOEDA BANCÁRIA"
]
let icons2 = [
    "../static/img/moeda-metalica.png",
    "../static/img/moeda-papel.png",
    "../static/img/moeda-fiduciaria.png",
    "../static/img/moeda-bancaria.png",
]

backBtn2.addEventListener("click", () => {
  indicators[condition2].classList.remove("checked")
  condition2--
  if (condition2 == -1) {
    condition2 = 3
  }
  textMoedas.innerText = texts[condition2]
  titlesMoedas.innerText = titles[condition2]
  imgMoedas.src = icons2[condition2]
  indicators[condition2].classList.add("checked")
})

nextBtn2.addEventListener("click", () => {
  indicators[condition2].classList.remove("checked")
  condition2++
  if (condition2 == 4) {
    condition2 = 0
  }
  textMoedas.innerText = texts[condition2]
  titlesMoedas.innerText = titles[condition2]
  imgMoedas.src = icons2[condition2]
  indicators[condition2].classList.add("checked")
})

// HOVER NOS PERFIS

const profile = document.querySelectorAll(".profile")
for (var i = 0; i < profile.length; i++) {
  const descProfile = profile[i].childNodes
  profile[i].addEventListener('mouseover', function(event) {
      descProfile[1].style.display = "flex";
      descProfile[1].style.opacity = 1;
  });
}
for (var i = 0; i < profile.length; i++) {
  const descProfile = profile[i].childNodes
  profile[i].addEventListener('mouseleave', function(event) {
      descProfile[1].style.opacity = 0;
      setTimeout(() => {descProfile[1].style.display = "none"}, 1000)
  });
}

// Carrossel com API

const backBtn = document.querySelector("#backBtn")
const nextBtn = document.querySelector("#nextBtn")
const indicatorsAPI = document.querySelectorAll(".indicatorsAPI")
const imgAPI = document.querySelector("#imgAPI")
const mudanca = document.querySelector("#mudanca-value")
const capMercado = document.querySelector('#capitalizacao-value')
const volume = document.querySelector("#volume-value")
const nameMoeda = document.querySelector('#nameMoeda')
let condition = 0
let imagesAPI = [
  "../static/img/bitcoin-icon.svg",
  "../static/img/ethereum-icon.svg",
  "../static/img/tether-icon.svg",
  "../static/img/litecoin-icon.svg"
]
let names = [
  "bitcoin", "ethereum", "tether", "litecoin"
]

nextBtn.addEventListener("click", () => {
  indicatorsAPI[condition].classList.remove("checked")
  condition++
  if (condition == 4) {
    condition = 0
  }
  const url2 = `https://api.coingecko.com/api/v3/simple/price?ids=${names[condition]}&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
  nameMoeda.innerText = names[condition]
  imgAPI.src = imagesAPI[condition]
  indicatorsAPI[condition].classList.add("checked")
  fetch(url2)
    .then(response => response.json())
    .then(data => {
      const market_cap = simplePrice(data[names[condition]]['brl_market_cap'])
      const change_24h = formattedChange(data[names[condition]]['brl_24h_change'])
      const volume_brl = simplePrice(data[names[condition]]['brl_24h_vol'])
      if (change_24h[0] == '-') {
        mudanca.classList.add('negative')
      }
      else if (change_24h[0] != '-') {
        mudanca.classList.remove('negative')
      }
      capMercado.innerText = market_cap
      mudanca.innerText = change_24h
      volume.innerText = volume_brl
    })
    .catch(error => {
      console.error(error);
      console.log("Erro ao requisitar status da criptomoeda")
    });
})

backBtn.addEventListener("click", () => {
  indicatorsAPI[condition].classList.remove("checked")
  condition--
  if (condition == -1) {
    condition = 3
  }
  const url2 = `https://api.coingecko.com/api/v3/simple/price?ids=${names[condition]}&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
  nameMoeda.innerText = names[condition]
  imgAPI.src = imagesAPI[condition]
  indicatorsAPI[condition].classList.add("checked")
  fetch(url2)
    .then(response => response.json())
    .then(data => {
      const market_cap = simplePrice(data[names[condition]]['brl_market_cap'])
      const change_24h = formattedChange(data[names[condition]]['brl_24h_change'])
      const volume_brl = simplePrice(data[names[condition]]['brl_24h_vol'])
      if (change_24h[0] == '-') {
        mudanca.classList.add('negative')
      }
      else if (change_24h[0] != '-') {
        mudanca.classList.remove('negative')
      }
      capMercado.innerText = market_cap
      mudanca.innerText = change_24h
      volume.innerText = volume_brl
    })
    .catch(error => {
      console.error(error);
      console.log("Erro ao requisitar status da criptomoeda")
    });
})

function simplePrice(value) {
  value = parseInt(value)
  value = value.toFixed(0)
  if (value.length < 10) {
    value = value / 1000000
    value = `R$${value}M`
    return(value)
  }
  else if (value.length > 12) {
    value = value / 1000000000000
    value = value.toFixed(1)
    value = `R$${value}T`
    return(value)
  }
  value = value / 1000000000
  value = value.toFixed(0)
  value = `R$${value}B`
  return(value)
}

function formattedChange(change) {
  change = change.toFixed(2)
  change = `${change}%`
  return(change)
}

const bicoinURL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
function bitcoinStats(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
        const market_cap = simplePrice(data['bitcoin']['brl_market_cap'])
        const change_24h = formattedChange(data['bitcoin']['brl_24h_change'])
        const volume_brl = simplePrice(data['bitcoin']['brl_24h_vol'])
        if (change_24h[0] == '-') {
          mudanca.classList.add('negative')
        }
        else if (change_24h[0] != '-') {
          mudanca.classList.remove('negative')
        }
        capMercado.innerText = market_cap
        mudanca.innerText = change_24h
        volume.innerText = volume_brl
    })
    .catch(error => {
      console.error(error);
      console.log("Erro ao requisitar status da criptomoeda")
    });
}

bitcoinStats(bicoinURL)