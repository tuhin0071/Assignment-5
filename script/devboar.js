const colors =["#3752FD","red", "yellow","blue","orange","purple","green"]
let index = 0;
document.getElementById("colorBtn").addEventListener("click", function(){
      document.body.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length;
});



const newPageBtn = document.getElementById("newpagebtn").addEventListener("click", function(){
      console.log(window.location.href="qu.html")
})