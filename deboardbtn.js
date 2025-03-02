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
            minusDiv.innerText = currentMinusDiv - value;
            plusDiv.innerText = currentPlusDiv - value;
            button.disabled = true;

      })

});