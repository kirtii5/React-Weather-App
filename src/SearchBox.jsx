import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.REACT_APP_API_URL;
  const API_KEY = import.meta.env.REACT_APP_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResp = await response.json();
      let result = {
        city: jsonResp.name,
        temp: jsonResp.main.temp,
        maxTemp: jsonResp.main.temp_max,
        minTemp: jsonResp.main.temp_min,
        feelsLike: jsonResp.main.feels_like,
        humidity: jsonResp.main.humidity,
        weather: jsonResp.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleInputChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="outlined">
          Search
        </Button>
      </form>
      <br />
      {error && (
        <div className="alert-container">
          <Alert
            severity="warning"
            onClose={() => {
              setError(false);
            }}>
            No such place exists !
          </Alert>
        </div>
      )}
    </div>
  );
}
