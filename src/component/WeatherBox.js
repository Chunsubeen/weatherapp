import React from 'react';

const WeatherBox = ({ weather }) => {
    const toFahrenheit = (celsius) => (celsius * 9/5) + 32;

    return (
        <div className="WeatherBox">
            <div>{weather?.name}</div>
            <div>{weather?.main.temp}°C / {toFahrenheit(weather?.main.temp).toFixed(2)}°F</div>
            <div>{weather?.weather[0].description}</div>
        </div>
    );
}

export default WeatherBox;
