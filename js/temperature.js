const apiKey = '71bd471654c4444ea33174816241012 '; // Replace with your WeatherAPI key
const city = 'Caracas'; // Caracas, Venezuela

// Function to fetch and display temperature
async function getTemperature() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById('current-temperature').textContent = 'Error fetching data';
        } else {
            const temp = data.current.temp_c; // Get the temperature in Celsius
            document.getElementById('current-temperature').textContent = ` ${temp}°C`;
        }
    } catch (error) {
        document.getElementById('current-temperature').textContent = 'Error fetching data';
    }
}

// Call the function to get the temperature
getTemperature();
