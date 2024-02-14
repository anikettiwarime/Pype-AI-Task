import React, { useState } from "react";
import { getWeatherData } from "../utils/lib";

interface WeatherSearchProps {
  onWeatherData: (data: any) => void;
}

function WeatherSearch({ onWeatherData }: WeatherSearchProps) {
  const [cityName, setCityName] = useState<string>("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityName(value);

    if (value.trim() !== "") {
      const data = await getWeatherData(value);
      onWeatherData(data.cod === "404" ? null : data);
    } else {
      onWeatherData(null);
    }
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <input
        type="text"
        placeholder="Search Your City"
        value={cityName}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-full bg-white shadow-md focus:outline-none"
      />
    </div>
  );
}

export default WeatherSearch;
