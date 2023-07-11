
import { useState } from 'react';
import CalendarComponent from './Calendar';
import Search from './search';
import CurrentWeather from './current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './API';
import Forecast from './forecast';
import './App.css';


function WebsiteDescription({ description }) {
  return (
    <div className="WebsiteDescription">
      <div className="LogoAndDescription">
        <h2>{description}</h2>
      </div>
    </div>
  );
}

function WeatherSearch({ searchdescription }) {
  return (
    <div className="WeatherSearch">
      <h2>{searchdescription}</h2>
    </div>
  );
}


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

  }

  return (

    <div>
      <WebsiteDescription description="You can store your plans in the calendar below by clicking on the date needed. At the bottom, you can search up the weather for the week in your city!" />
    <div className="calendar-container">
      <CalendarComponent/>
    </div>
    <WeatherSearch searchdescription="Search for the weather in your city down below!" />
    <div>
      <div className='container'>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  </div>
  );
}

export default App;

  