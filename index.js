const myInput = document.getElementById("inputCountry");
const myButton = document.getElementById("buttonCountry");

myButton.addEventListener("click", function() {
    const country = input.value;

    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '1fb84f09cemshbc864e1330b4786p122d2fjsnedb135330e4d',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const statistics = data.response[0];
    
        document.getElementById("activeCases").textContent = statistics.cases.active;
        document.getElementById("newCases").textContent = statistics.cases.new;
        document.getElementById("recoveredCases").textContent = statistics.cases.recovered;
        document.getElementById("totalCases").textContent = statistics.cases.total;
        document.getElementById("totalDeaths").textContent = statistics.deaths.total;
        document.getElementById("totalTests").textContent = statistics.tests.total;
    })
    .catch(err => {
        console.error(err);
        alert("An error occured while retrieving the data");
    });
});