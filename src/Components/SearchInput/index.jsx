import React, { useState } from "react";

export default function index() {
  const [search, setSearch] = useState("");

  const apiKey = import.meta.env.VITE_REACT_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`
    );

    const data = await response.json();

    console.log(data);

    setSearch("");
  };

  return (
    <>
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
    </>
  );
}
