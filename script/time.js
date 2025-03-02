function updateDateTime() {
      let now = new Date();
  
      // Array of weekdays and months for better readability
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
      // Get current day, month, date, and year
      let weekday = weekdays[now.getDay()]; // Get the day name
      let month = months[now.getMonth()]; // Get the month name
      let day = now.getDate().toString().padStart(2, '0'); // Get the day of the month
      let year = now.getFullYear(); // Get the year
  
      // Format: "Wed <br> March 1 2025"
      let formattedDate = `${weekday} <br> ${month} ${day} ${year}`;
  
      // Set the inner HTML of the "time" element
      document.getElementById("time").innerHTML = formattedDate;
  }
  
  // Call the function immediately and update every second
  updateDateTime();
  setInterval(updateDateTime, 1000);