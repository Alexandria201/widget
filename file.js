fetch('http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no')
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-use-before-define
    render(data);
  });

function render(data) {
  document.getElementById('app').innerHTML = `
    Here is your daily weather!
    <div> City: ${data.location.name}; </div>
    <div> Country: ${data.location.country}; </div>
    <div> Current temperature: ${data.current.temp_c};</div>
    <div> Humidity:${data.current.humidity}; </div>
    <div>${data.current.condition.text};</div>
    <div>
      <img src="http:////cdn.weatherapi.com/weather/64x64/day/116.png"" alt="">
    </div>
    `;
}
