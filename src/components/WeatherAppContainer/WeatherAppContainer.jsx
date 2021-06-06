import React from 'react';
// import axios from 'axios';
import WeatherAndTemp from '../WeatherAndTEmp';
import WindSpeedAndHumidity from '../WindSpeedANdHumidity';
import styled from 'styled-components';

const FlexCenterBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  max-width: 980px;
  flex-direction: column;
  background: white;
  box-shadow: 5px 5px 9px 2px rgba(204,204,204,0.69);
  border-radius: 1rem;
  padding:2rem;
  
`;

const WeatherBackground = styled.div`
  background-image: url(https://images.unsplash.com/photo-1554120013-4ba50c1a1788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
  background-position: center;
  background-size: cover;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const TitleH1 = styled.h1`
  margin-top:0;
`;


class WeatherAppContainer extends React.Component{
  constructor(){
    super();

    this.state ={
      weather: null,
      temp: null,
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
    // const Brisbane = '2174003'
    // const Sydney = '2147714'
    // const Melbourne = '2158177'
    // const basePath = 'https://api.openweathermap.org/data/2.5';
    // const units = 'metric';
    // const appid = '4105e944137f7e378cba2531e15c7475';
    // const url = `${basePath}/weather?id=${Brisbane}&units=${units}&appid=${appid}`;
    
    // https://api.openweathermap.org/data/2.5/weather?id=2174003&units=metric'&appid=4105e944137f7e378cba2531e15c7475
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2174003&units=metric&appid=4105e944137f7e378cba2531e15c7475', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        // const {weather,}  = result.response;
        this.setState({
          // weather: weather,
          weather: result.response.weather[0].description,
          temp : result.response.main.temp
        })
      })
      .catch((error) => error && alert(error.message));
      }


  render(){
    // const { weather, temp } = this.state; 
    console.log(this.state.weather); 
       return(

      <WeatherBackground >
        <FlexCenterBox>
          <TitleH1 >{`Brisbane Weather`}</TitleH1>
          {/* {weather && temp && <WeatherAndTemp weather={weather} temp={temp}/>} */}
          {/* <WindSpeedAndHumidity windSpeed={windSpeed} humidity={humidity} city={city}/> */}


        </FlexCenterBox>
      </WeatherBackground >
    )
  }
}


export default WeatherAppContainer;