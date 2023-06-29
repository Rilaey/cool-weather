export default function index({
  date,
  minTemp,
  currentTemp,
  highTemp,
  windSpeed,
  humidity,
  description,
  icon
}) {
  return (
    <>
      <div className="flex m-3" style={{ border: "2px solid red"}}>
        <div>
          <h2>{date}</h2>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="forecast icon"
          />
        </div>
        <div>
          <p className="m-1 text-white">Min Temp: {minTemp} °F</p>
          <p className="m-1 text-white">Current Temp: {currentTemp} °F</p>
          <p className="m-1 text-white">High Temp: {highTemp} °F</p>
        </div>
        <div>
          <p className="m-1 text-white">Wind Speed: {windSpeed} MPH</p>
          <p className="m-1 text-white">Humidity: {humidity} %</p>
          <p className="m-1 text-white">Description: {description}</p>
        </div>
      </div>
    </>
  );
}
