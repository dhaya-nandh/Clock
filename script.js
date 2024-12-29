function updateClock() {
    const now = new Date();
  
    // Get current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate angles
    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourAngle = (hours % 12 / 12) * 360 + (minutes / 60) * 30;
  
    // Update clock hands
    document.querySelector(".big").style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector(".small").style.transform = `rotate(${hourAngle}deg)`;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initialize the clock on load
  