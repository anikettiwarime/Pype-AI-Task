# Weather Application

This weather application, built with Next.js, utilizes the OpenWeatherMap API to automatically detect and display current weather conditions based on the user's location.

## Project Structure

- **Home Page:** The landing page, automatically detecting and displaying weather conditions for the user's location.
- **Search Page:** Allows users to manually search and view weather details for specific locations.
- **Details Page:** Provides more detailed information about the weather, including temperature, humidity, wind speed, and description.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/anikettiwarime/pype-ai-task.git
```

2. Navigate to the project directory:

```bash
cd pype-ai-task
```

3. Install dependencies:

```bash
npm install
```

## Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

## Features

- **Automatic Location Detection:** The home page automatically detects and displays weather conditions for the user's location.
- **Dynamic Routing:** The application uses dynamic routing to navigate to the search page based on the user's input.

- **OpenWeatherMap API:** Connects to the OpenWeatherMap API to fetch and display current weather conditions.

- **Error Handling:** Basic error handling is implemented for cases where the user enters an invalid location or if there is an issue with the API request.

- **Styling:** Basic styling has been applied for a clean and responsive design.

## Bonus Features (Optional)

- **Temperature Units:** Users can switch between Celsius and Fahrenheit for temperature display.

## Deployment

The application is deployed on Vercel and can be accessed at [Weather Application](https://pype-ai-task.vercel.app/).

Feel free to explore the code and make improvements! If you have any questions or feedback, please contact me at [LinkedIn](https://www.linkedin.com/in/anikettiwarime/).
