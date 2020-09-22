window.addEventListener("load", () => {
  let long;
  let lat;
  const key = "5b66676ebb6ce1390cf707675cb8d278";
  let description = document.querySelector("#description");
  let visibility = document.querySelector("#visibility");
  let location = document.querySelector("#location");
  let temp = document.querySelector("#temp");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          description.textContent = data.weather[0].description;
          visibility.textContent = data.visibility;
          location.textContent = data.name;
          temp.textContent = data.main.temp - 273.15;
        });
    });
  } else {
    h1.textContent = "hey dis is not working ";
  }
});
