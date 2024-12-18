function updateTime() {
    const timeElement = document.getElementById("current-time");

    // Get the current time
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the time element
    timeElement.textContent = formattedTime;
}

// Update time immediately and every second
updateTime();
setInterval(updateTime, 1000);