import React from 'react';

const WeatherAndTemp = ({
  weather,
  temp,
}) => {
  return (
    <div>
      <div>{`Weather: ${weather}`}</div>
      <div>{`Temp: ${temp}`}</div>
    </div>
  );
};

export default WeatherAndTemp;
