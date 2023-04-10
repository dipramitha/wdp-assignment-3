function getCovidData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fb84f09cemshbc864e1330b4786p122d2fjsnedb135330e4d',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    const country = document.getElementById("inputCountry").value;


    
    if(country) {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia', options)
        .then((response) => response.json())
        .then((data) => {
            // Fetch data 
            const currentData = data[data.length - 1];

            // Access data 
            const currentActiveCases = currentData.cases.active
            const currentNewCases = currentData.cases.new
            const currentRecoveredCases = currentData.cases.recovered
            const currentTotalCases = currentData.cases.total
            const currentTotalDeaths = currentData.deaths.total
            const currentTotalTests = currentData.tests.total

            // Display data 
            document.getElementById("activeCases").textContent = currentActiveCases.toLocaleString();
            document.getElementById("newCases").textContent = currentNewCases.toLocaleString();
            document.getElementById("recoveredCases").textContent = currentRecoveredCases.toLocaleString();
            document.getElementById("totalCases").textContent = currentTotalCases.toLocaleString();
            document.getElementById("totalDeaths").textContent = currentTotalDeaths.toLocaleString();
            document.getElementById("totalTests").textContent = currentTotalTests.toLocaleString();
        })
        .catch((error) => console.error(error));
    }
}