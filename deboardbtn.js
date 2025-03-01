let minusDiv = document.getElementById("minussection");
let plusDiv =  document.getElementById("plussection");
let buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
      button.addEventListener("click", function(){
            let value = parseFloat (button.getAttribute("data-value"));
            alert(`You clicked Button with value: `); 
            //  ${r}

            let currentMinusDiv = parseInt(minusDiv.innerText);
            let currentPlusDiv = parseInt(plusDiv.innerText);
            minusDiv.innerText = currentMinusDiv - value;
            plusDiv.innerText = currentPlusDiv - value;

      })

});