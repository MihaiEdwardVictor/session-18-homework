fetch("./data/cities.json")
  .then((response) => {
    //make a json format response
    //from the actual response content
    return response.json();
  })
  .then((formattedResponse) => {
    //directly accessing the weather property from the response
    return displayCitiesCards(formattedResponse.cities);
  });

  function displayCitiesCards(data) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center','gap-5','mt-5'); // Adding Bootstrap classes
  
    data.forEach((item) => {
      const cardHTML = `
        <div class="card text-bg-secondary mb-3 col-3">
          <div class="card-header bg-black bg-opacity-25">${item.name}</div>
          <div class="card-body bg-secondary bg-opacity-25 text-bg-secondary">
            <p>Country: ${item.country}</p>
            <p>Population: ${item.population}</p>
            <p>Area in sqm: ${item.details.areaSqKm}</p>
            <p>Famous Landmark: ${item.details.famousLandmark}</p>
          </div>
        </div>
      `;
      cardContainer.innerHTML += cardHTML;
    });
  
    document.body.appendChild(cardContainer);
  }