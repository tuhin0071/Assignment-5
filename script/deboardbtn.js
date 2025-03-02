let minusDiv = document.getElementById("minussection");
let plusDiv =  document.getElementById("plussection");
let buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
      button.addEventListener("click", function(){
            let value = parseFloat (button.getAttribute("data-value"));
            alert(`You clicked Button with value: `);
            
          
            if (minusDiv.innerText <= 1 ){

                  
                  alert("Congratulations! You have completed all the tasks");
            };
            //  ${r}

            let currentMinusDiv = parseInt(minusDiv.innerText);
            let currentPlusDiv = parseInt(plusDiv.innerText);
            minusDiv.innerText = (currentMinusDiv - value).toString().padStart(2, '0');;
            plusDiv.innerText = currentPlusDiv - value;
            button.disabled = true;

            let now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            let timeString = `${hours}:${minutes}:${seconds}`;
    


            let parentDiv = button.closest("div");
            let heading = parentDiv.querySelector("h1"); 
    
            
            if (heading) {
                heading = heading.innerText;  
            };
        const activityLog = document.getElementById("activity-log");
        
        const div = document.createElement("div");
        div.classList.add("bg-red-300", "p-4", "rounded-2xl" ,"mt-4");
        div.innerHTML = `<p class="text-l ">You have completed the task:<Strong> ${heading} </Strong> at ${timeString}</p>`;
        activityLog.append(div);


      })

});