


// // ***********************************************************************************************
// Snow Animation

const flake = document.querySelector(".flake");
const container = document.querySelector(".container");

function createFlake() {
  const clone = flake.cloneNode(true);
  clone.style.marginLeft = Math.random() * 100 + "vw"; // creating left margin
  clone.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5
  clone.style.opacity = Math.random() * 1;
  container.append(clone); // adding clone flake to container
}
const s = setInterval(createFlake, 100); // to create more flakes decrease 100

setTimeout(() => {
  clearInterval(s);
}, 3000); // flake creation stops after 3000 milliseconds or 3s

// // ***********************************************************************************************


//**************************** */
// History HTML link

 const historybutton = document.getElementById("historytab");
 historybutton.addEventListener("click", HistoryTab);

 function HistoryTab(){

     // Change background when clicking history tab
    //  document.body.style.backgroundImage = "url('../img/jurassic.jpg')";
     window.location.href = "history.html";
 }


//********************************* */

