"use client";
import "../../globals.css";
import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../../utils/lib"; // Replace with the actual utility function for fetching weather data

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface PageProps {
  params: {
    location: string;
  };
}

const WeatherPage: React.FC<PageProps> = ({ params }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<string>("Celsius");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(params.location);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [params.location]);

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "Celsius" ? "Fahrenheit" : "Celsius"
    );
  };

  const convertTemperature = (temp: number, unit: string) => {
    if (unit === "Fahrenheit") {
      return (temp * 9) / 5 + 32;
    }
    return temp;
  };

  return (
    <div className="container mx-auto p-4">
      {weatherData ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h1>
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={toggleTemperatureUnit}
            >
              Switch to{" "}
              {temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius"}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Temperature</p>
              <p>
                {convertTemperature(weatherData.main.temp, temperatureUnit)}{" "}
                {temperatureUnit === "Celsius" ? "°C" : "°F"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Feels Like</p>
              <p>
                {convertTemperature(
                  weatherData.main.feels_like,
                  temperatureUnit
                )}{" "}
                {temperatureUnit === "Celsius" ? "°C" : "°F"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Min Temperature</p>
              <p>
                {convertTemperature(weatherData.main.temp_min, temperatureUnit)}{" "}
                {temperatureUnit === "Celsius" ? "°C" : "°F"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Max Temperature</p>
              <p>
                {convertTemperature(weatherData.main.temp_max, temperatureUnit)}{" "}
                {temperatureUnit === "Celsius" ? "°C" : "°F"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Pressure</p>
              <p>{weatherData.main.pressure} hPa</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Visibility</p>
              <p>{weatherData.visibility} meters</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Wind Speed</p>
              <p>{weatherData.wind.speed} m/s</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Wind Direction</p>
              <p>{weatherData.wind.deg}°</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Cloudiness</p>
              <p>{weatherData.clouds.all}%</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Sunrise</p>
              <p>
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-semibold">Sunset</p>
              <p>
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherPage;
