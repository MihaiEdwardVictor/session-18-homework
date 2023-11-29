fetch("./data/weather.json")
  .then((response) => {
    //make a json format response
    //from the actual response content
    return response.json();
  })
  .then((formattedResponse) => {
    //directly accessing the weather property from the response
    return displayWeatherCards(formattedResponse.weather);
  });

  function displayWeatherCards(data) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center','gap-5','mt-5'); // Adding Bootstrap classes
  
    data.forEach((item) => {
      const cardHTML = `
        <div class="card text-bg-secondary mb-3 col-2">
          <div class="card-header bg-black bg-opacity-25">${item.city}</div>
          <div class="card-body bg-secondary bg-opacity-25 text-bg-secondary">
            <p>Temperature: ${item.temperature} °C </p>
            <p>Condition: ${item.condition}</p>
            <p>Humidity: ${item.details.humidity}</p>
            <p>Windspeed: ${item.details.windSpeed} km/h</p>
          </div>
        </div>
      `;
      cardContainer.innerHTML += cardHTML;
    });
  
    document.body.appendChild(cardContainer);
  }