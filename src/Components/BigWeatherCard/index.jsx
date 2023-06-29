

export default function index({ date, minTemp, currentTemp, highTemp, windSpeed, cityName, humidity, description, icon, }) {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl m-2 text-white">{cityName}</h1>
          <h2 className="text-xl m-2 text-white">{date}</h2>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="forecast" className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="m-1 text-white">Min Temp: {minTemp} °F</p>
          <p className="m-1 text-white">Current Temp: {currentTemp} °F</p>
          <p className="m-1 text-white">High Temp: {highTemp} °F</p>
        </div>
        <div>
          <p className="m-1 text-white">Wind Speed: {windSpeed} MPH</p>
          <p className="m-1 text-white">Humidity: {humidity} %</p>
          <p className="m-1 text-white">Description: {description}.</p>
        </div>
      </div>
    </>
  )
}
