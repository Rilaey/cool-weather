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
      <div
        className="flex flex-wrap justify-start items-start m-3 p-3"
        style={{
          backgroundColor: "#2F2F31",
          borderRadius: "25px",
          opacity: "0.8"
        }}
      >
        <div className="flex items-start justify-start">
          <h2 className="m-2 text-xl text-white">{date}</h2>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="forecast icon"
            className="w-full"
          />
        </div>
        <div className="flex items-start justify-start flex-col flex-wrap w-auto">
          <p className="m-2 text-white">Min Temp: {minTemp} °F</p>
          <p className="m-2 text-white">Current Temp: {currentTemp} °F</p>
          <p className="m-2 text-white">High Temp: {highTemp} °F</p>
        </div>
        <div className="flex items-start justify-start flex-col flex wrap w-auto">
          <p className="m-2 text-white">Wind Speed: {windSpeed} MPH</p>
          <p className="m-2 text-white">Humidity: {humidity} %</p>
          <p className="m-2 text-white">Description: {description}.</p>
        </div>
      </div>
    </>
  );
}
