const myInput = document.getElementById('inputCountry')
const myButton = document.getElementById('buttonCountry')
myButton.addEventListener('click', function (event) {
  event.preventDefault()
  const countries = myInput.value

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${countries}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1fb84f09cemshbc864e1330b4786p122d2fjsnedb135330e4d',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      const covidData = data.response[0]

      document.getElementById('activeCases').textContent =
        covidData.cases.active
      document.getElementById('newCases').textContent = covidData.cases.new
      document.getElementById('recoveredCases').textContent =
        covidData.cases.recovered
      document.getElementById('totalCases').textContent = covidData.cases.total
      document.getElementById('totalDeaths').textContent =
        covidData.deaths.total
      document.getElementById('totalTests').textContent = covidData.tests.total
    })
    .catch(err => {
      console.error(err)
      alert('An error occured while retrieving the data')
    })
})
