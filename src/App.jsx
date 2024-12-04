import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <hr style={{ border: "1px solid gray" }} />
      <div className="task-card">
        <h3>Weather App</h3>
        <ul>
          <li className="list-task">
            Fetch data from a weather API
            <ul>
              <li>
                <a href="https://www.weather.gov/documentation/services-web-api#/default/alerts_query">
                  https://www.weather.gov/documentation/services-web-api
                </a>
              </li>
            </ul>
          </li>
          <li className="list-task">
            Learn how to handle asynchronous operations
            <ul>
              <li>
                <input type="checkbox" id="async-operations" />
                <label htmlFor="async-operations">
                  Get data from the API using fetch
                </label>
              </li>
              <li>
                <input type="checkbox" id="async-operations" />
                <label htmlFor="async-operations">
                  Use async/await to handle promises
                </label>
              </li>
            </ul>
          </li>
          <li className="list-task">
            Implement error handling and loading states
            <ul>
              <li>
                <input type="checkbox" id="error-handling" />
                <label htmlFor="error-handling">
                  Handle errors from the API
                </label>
              </li>
              <li>
                <input type="checkbox" id="loading-states" />
                <label htmlFor="loading-states">
                  Show loading state while fetching data
                </label>
              </li>
            </ul>
          </li>
        </ul>
        <hr style={{ border: "1px solid gray" }} />
      </div>
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
