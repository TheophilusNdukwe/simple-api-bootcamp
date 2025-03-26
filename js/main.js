


document.querySelector('button').addEventListener('click', getData)

function getData() {
   //https://financialmodelingprep.com/api/v3/quote/BTCUSD

   let inputValue = document.querySelector('input').value
   let key = 'jloMnBQCRwaPo2L4H5rkzrnN62LGBYcU'

   let url = `https://financialmodelingprep.com/api/v3/quote/${inputValue}?&apikey=${key}`

   

   fetch(url)
      .then(res => res.json())
      .then(data => {
         console.log(data)
         document.querySelector('h1').innerText = data[0].symbol
         document.querySelector('h2').innerText = data[0].price
         document.querySelector('h3').innerText = data[0].changesPercentage
         document.querySelector('h4').innerText = data[0].marketCap
         document.querySelector('h5').innerText = data[0].yearHigh
         document.querySelector('h6').innerText = data[0].yearLow
         
      })
   .catch(err => { 
            console.log(`error ${err}`)
        })

   
}