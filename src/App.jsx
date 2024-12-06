import { useEffect, useState } from "react";
import "./App.css";
import Brief from "./components/brief";
import { useQuery } from "@tanstack/react-query";

const array = [0, 2, 4, 6, 8, 10, 12];

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.weather.gov/gridpoints/LOT/65,67/forecast"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>Weather App</h1>
      <div className="weather-card-container">
        {array.map((key, index) => (
          <div className="weather-card">
            <div className="weather-card-header">
              <h2>
                {data.properties.periods[key].name == "This Afternoon"
                  ? "Today"
                  : data.properties.periods[key].name}
              </h2>
              <img
                className="weather-icon"
                src={data.properties.periods[key].icon}
                alt="weather-icon"
              />
              <div className="weather-info">
                <p className="temperature-high">
                  {tempHigh(
                    data.properties.periods[key].temperature,
                    data.properties.periods[key + 1].temperature
                  )}
                  °F
                </p>
                <p className="temperature-low">
                  {" "}
                  {tempLow(
                    data.properties.periods[key].temperature,
                    data.properties.periods[key + 1].temperature
                  )}
                  °F
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Brief />
    </>
  );
}

export default App;

{
  /*
  - **Weather App**:
    - Fetch data from a weather API.
        - https://www.weather.gov/documentation/services-web-api#/default/alerts_query
    - Learn how to handle asynchronous operations.
    - Implement error handling and loading states.
   */
}

function tempHigh(temp1, temp2) {
  return temp1 > temp2 ? temp1 : temp2;
}

function tempLow(temp1, temp2) {
  return temp1 < temp2 ? temp1 : temp2;
}
