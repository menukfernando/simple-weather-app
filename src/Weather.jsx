import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');

    const getWeather = () => {
        const apiKey = 'c3783b30cd65daa57bf4d85db8bf8b18';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeather(data);
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name"
            />
            <button onClick={getWeather}>Get Weather</button>
            {weather && (
                <div className='weather-card'>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
