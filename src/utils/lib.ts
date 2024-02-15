export async function getWeatherData(location: string) {
  console.log(process.env.WEATHER_API_KEY);

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
}

export async function fetchUserLocation() {
  return fetch("https://ipapi.co/json/")
    .then((res) => {
      const data = res.json();
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}

export async function fiveDayForecastData(location: string) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());
}
