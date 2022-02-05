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

export default render;