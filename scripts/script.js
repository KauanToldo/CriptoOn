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