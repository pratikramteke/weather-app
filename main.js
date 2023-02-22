const input = document.querySelector("input");
const apiKey = process.env.API_KEY;

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value != "") {
    console.log(input.value);
    getData(input.value);
    input.value = "";
  }
});

function getData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => alert(data.main.temp));
}
