import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°F`
    );
  }

  let apiKey = "07d2964c500ffbfcd2b577b291d089bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="loader-spinner">
      <Audio
        height="100"
        width="100"
        color="blue"
        ariaLabel="loading"
        class="loader-spinner"
      />
    </div>
  );
}
