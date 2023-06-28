import SearchInput from "./Components/SearchInput/index";
import BigWeatherCard from "./Components/BigWeatherCard/index";
import SmallWeatherCard from "./Components/SmallWeatherCard/index";

function App() {

  return (
    <>
      <div className="flex flex-col m-5">
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-3/12 m-2 p-2" style={{ border: "2px solid yellow"}}>
            <SearchInput />
          </div>
          <div className="w-9/12 h-auto p-2 m-2" style={{ border: "2px solid red"}}>
            <BigWeatherCard />
          </div>
        </div>
        <div className="m-2 p-2" style={{ border: "2px solid purple"}}>
          <SmallWeatherCard/>
        </div>
      </div>
    </>
  );
}

export default App;
