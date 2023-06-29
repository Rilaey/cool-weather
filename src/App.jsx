import { useState } from "react";
import BigWeatherCard from "./Components/BigWeatherCard/index";
import SmallWeatherCard from "./Components/SmallWeatherCard/index";

//! FIX TIME SETTINGS
//! FORECAST ICONS

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const apiKey = import.meta.env.VITE_REACT_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`
    );

    const data = await response.json();
    setWeatherData(data);

    console.log(data);

    setSearch("");
  };

  // useEffect(() => {
  //     const loadFirstWeather = async () => {
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=${apiKey}`
  //       );

  //       const data = await response.json();
  //       // console.log(data)

  //       setWeatherData(data);
  //       console.log(weatherData.city);
  //     };

  //     loadFirstWeather();
  // }, []);

  return (
    <>
      <div className="flex flex-col m-5">
        <div className="flex flex-col items-center justify-center flex-wrap">
          <div
            className="w-3/12 m-2 p-2"
            style={{ border: "2px solid yellow" }}
          >
            <div className="flex flex-col items-center justify-center">
              <form
                onSubmit={handleSearch}
                className="flex flex-col items-center justify-center"
              >
                <div>
                  <h1 className="text-xl">Lets Check The Weather</h1>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                  <input
                    type="text"
                    placeholder="Enter A City..."
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="m-2 p-2"
                  />
                  <button className="btn btn-outline btn-success" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {weatherData.city ? (
            <>
              <div
                className="w-9/12 h-auto p-2 m-2"
                style={{ border: "2px solid red" }}
              >
                <BigWeatherCard
                  date={weatherData.list[0].dt_txt}
                  minTemp={weatherData.list[0].main.temp_min}
                  currentTemp={weatherData.list[0].main.temp}
                  highTemp={weatherData.list[0].main.temp_max}
                  windSpeed={weatherData.list[0].wind.speed}
                  cityName={weatherData.city.name}
                  humidity={weatherData.list[0].main.humidity}
                  description={weatherData.list[0].weather[0].description}
                  icon={weatherData.list[0].weather[0].icon}
                />
              </div>
              <div className="m-2 p-2" style={{ border: "2px solid purple" }}>
                <SmallWeatherCard />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
