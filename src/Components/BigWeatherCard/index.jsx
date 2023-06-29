

export default function index({ date, minTemp, currentTemp, highTemp, windSpeed, cityName, humidity, description, icon, }) {
  return (
    <>
      <div>
        <div>
          <h1>{cityName}</h1>
          <h2>{date}</h2>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="forecast" />
        </div>
        <div>
          <p>Min Temp: {minTemp} °F</p>
          <p>Current Temp: {currentTemp} °F</p>
          <p>High Temp: {highTemp} °F</p>
        </div>
        <div>
          <p>Wind Speed: {windSpeed} MPH</p>
          <p>Humidity: {humidity} %</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </>
  )
}
