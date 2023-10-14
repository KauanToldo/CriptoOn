function converter() {
    const coin = document.getElementById('coin').value;
    const currency = document.getElementById('currency').value;
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const price = data[coin][currency]
        const formattedPrice = new Number(price).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        const currencySymbols = {
          'brl': 'R$',
          'usd': 'US$',
          'eur': '€'
        };
        const currencySymbol = currencySymbols[currency.toLowerCase()];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `O ${coin} está valendo ${currencySymbol}${formattedPrice}`;
      })
      .catch(error => {
        console.error(error);
        const resultado = document.getElementById('resultado');
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
  const navbarMobile = document.querySelector("#navbar-aberta-container")
  const header = document.querySelector("header")

  navbarBtn.addEventListener("mouseover", () => {
    navbarMobile.classList.toggle("fechada")
    navbarMobile.classList.toggle("aberta")
  })

  navbarMobile.addEventListener("mouseout", () => {
    navbarMobile.classList.toggle("fechada")
    navbarMobile.classList.toggle("aberta")
  })

  // animar os numeros de 0 a x 


  // counter paises

  
//   let counter = 0;
// const interval = setInterval(() => {
//     console.log(counter);
//     counter++;
//     if (counter > 120) {
//         clearInterval(interval);
//     }
// }, 10);

  // counter regioes 


  // let counter = 0;
  // const interval = setInterval(() => {
  //     console.log(counter);
  //     counter++;
  //     if (counter > 57) {
  //         clearInterval(interval);
  //     }
  // }, 10);


  // counter estados

  // let counter = 0;
  // const interval = setInterval(() => {
  //     console.log(counter2);
  //     counter ++;
  //     if (counter > 2453) {
  //         clearInterval(interval);
  //     }

  // }, 10);