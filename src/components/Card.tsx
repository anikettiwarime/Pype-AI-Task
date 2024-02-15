import React from "react";

interface WeatherProps {
  data: {
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
    main: {
      temp: number;
      feels_like: number;
    };
    wind: {
      speed: number;
    };
    sys: {
      country: string;
    };
    name: string;
  };
}

const WeatherComponent: React.FC<WeatherProps> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        {data.name}, {data.sys.country}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Temperature</p>
          <p className="text-4xl font-bold">{data.main.temp}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Feels Like</p>
          <p className="text-4xl font-bold">{data.main.feels_like}°C</p>
        </div>
      </div>
      <p className="mt-4 text-center">
        {data.weather[0].main} - {data.weather[0].description}
      </p>
      <p className="mt-4 text-center">Wind Speed: {data.wind.speed} m/s</p>
      <p className="mt-4 text-center text-gray-600">
        Click here for more details!
      </p>
    </div>
  );
};

export default WeatherComponent;
