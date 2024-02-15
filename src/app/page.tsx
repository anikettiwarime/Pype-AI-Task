"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import WeatherSearch from "../components/SearchBar";
import WeatherComponent from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import { getWeatherData, fetchUserLocation } from "../utils/lib";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserLocation().then((data: any) => {
      getWeatherData(data.city).then((data) => {
        handleWeatherData(data);
      });
    });
  }, []);

  const handleWeatherData = (data: any) => {
    if (data && data.cod !== "404") {
      setWeatherData(data);
      setError(null);
    } else {
      setWeatherData(null);
      setError("City not found. Please enter a valid city name.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Weather App</h1>
      <div className="w-full max-w-md">
        <WeatherSearch onWeatherData={handleWeatherData} />
      </div>
      {weatherData ? (
        <div className="mt-8">
          <Link
            href={{
              pathname: `/details/${weatherData.name}`,
            }}
          >
            <WeatherComponent data={weatherData} />
          </Link>
        </div>
      ) : (
        <div>
          {error ? (
            <ErrorMessage error={error} />
          ) : (
            <p className="text-gray-800 text-lg mt-8">
              Search for a city to get the current weather
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
