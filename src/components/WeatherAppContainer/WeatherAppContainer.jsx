import React from 'react';
// import axios from 'axios';
import WeatherAndTemp from '../WeatherAndTEmp';
import WindSpeedAndHumidity from '../WindSpeedANdHumidity';

class WeatherAppContainer extends React.Component{
  constructor(){
    super();

    this.state ={
      myName: 'Elbert',
      weather: null,
      windSpeed: null,
      temp: null,
      humidity:null,
      city:null
    };
  }

  // componentDidMount(){
  //   // use axios to ge t data
  //   axios
  //   .get('https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=AU&cityName=Sydney&weatherType=current')
  //   .then((response) => console.log(response))
  //   .catch((error) => error && (alert(error.message)));
  // }

  // Use fetch to get data from api
  componentDidMount() {
    fetch('https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=AU&cityName=Sydney&weatherType=current', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        const { current: {weather, maxCelsius, windSpeed, humidity}, city: { name } } = result.response;
        this.setState({
          // weather: weather,
          weather,
          temp: maxCelsius,
          windSpeed,
          humidity,
          city: name,
        })
      })
      .catch((error) => error && alert(error.message));
      }


  render(){
    const { myName, weather, temp, windSpeed, humidity, city } = this.state; 
    return(
      <React.Fragment>
        <h1>{`${myName}'s Weather App Example`}</h1>
        {weather && temp && <WeatherAndTemp weather={weather} temp={temp}/>}
        <WindSpeedAndHumidity windSpeed={windSpeed} humidity={humidity} city={city}/>
      </React.Fragment>
    )
  }
}


export default WeatherAppContainer;