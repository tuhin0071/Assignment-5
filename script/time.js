function updateDateTime() {
      let now = new Date();
  

      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
      
      let weekday = weekdays[now.getDay()]; 
      let month = months[now.getMonth()]; 
      let day = now.getDate().toString().padStart(2, '0'); 
      let year = now.getFullYear(); 
  
      
      let formattedDate = `${weekday} <br> ${month} ${day} ${year}`;
  

      document.getElementById("time").innerHTML = formattedDate;
  }
  
  
  updateDateTime();
  setInterval(updateDateTime, 1000);