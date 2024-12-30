# Weather App

A simple weather application built with React and Material-UI. It fetches weather data from the OpenWeatherMap API and displays it.

---

## Features

- Search for weather by city name.
- Display temperature, humidity, and weather description.
- Show alerts if the city is not found.

---

## Technologies Used

- **React**: For building the user interface.
- **Material-UI**: For styling and UI components.
- **OpenWeatherMap API**: For fetching weather data.

---

## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   REACT_APP_API_URL=https://api.openweathermap.org/data/2.5/weather
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Usage

1. Enter the name of a city in the input field.
2. Click the **Search** button.
3. The application will display the current weather information for the entered city.
4. If the city is not found, an alert will appear.

---

## Deployment

The application is deployed on Netlify. Follow these steps to update your deployed site:

1. Commit your changes to your local repository:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. Push your changes to the branch linked to your Netlify site:
   ```bash
   git push origin main
   ```

3. Netlify will automatically build and deploy your changes.

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

---

## Acknowledgements

- **Create React App**: For the initial project setup.
- **Material-UI**: For the UI components.
- **OpenWeatherMap**: For the weather API.

---

## Contact

For questions or feedback, feel free to reach out via email: [kirtimmd2@gmail.com](mailto:kirtimmd2@gmail.com).

---

