function searchCity(city) {
  let apiKey = "f3tb6c4a39o18b701a82bf50b801c4af";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
}
let searchFormElement = document.querySelector("#search-form");
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
