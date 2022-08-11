

document.body.style.backgroundImage = "url('background.jpg')";

//Counter for different eras
var counter = 1;
let maxcounter = 3;

const timelinename = document.getElementById("historyheading");
const year = document.getElementById("historyyear");
const text = document.getElementById("historytext");

const navsection = document.getElementById("historycontent");

const picture = document.querySelector("#historycontentmiddle");
const images = document.querySelectorAll("#historycontentmiddle img");
const rightbutton = document.querySelector("#nextbtn");
const leftbutton = document.querySelector("#prevbtn");

let length = 0;


leftbutton.addEventListener("click", GoLeft);
rightbutton.addEventListener("click", GoRight);

// Current timeline selected will be opaque
images[0].style.opacity= 1;



// Change content display when arrow is clicked
function ChangeContent(num){
    if (num == 1)
    {
        timelinename.innerHTML = "<strong>Jurassic Period</strong>";
        year.innerHTML = "About 200 millions years ago";
        text.innerHTML = "Did you know that dinosaurs once inhabitated here that we know now for having sub-zero temperatures? This is because Antarctica used to be much closer to the equator. This makes dinosaurs trive in a warmer environment.";
    }
    else if (num == 2)
    {

        timelinename.innerHTML = "<strong>Creataceous Period</strong>";
        year.innerHTML = "145 to 66 millions years ago";
        text.innerHTML = "During this time period there were forests. This was the period before they went extinct";
    }

    if(counter == 1)
    {
        leftbutton.innerHTML = " ";
    }
    else
    {
        leftbutton.innerHTML =  "<img src='img/leftarrow.png' alt='Back Button' class='buttonimage2' id='leftbtn'>";
    }

    if (counter == maxcounter)
    {
        rightbutton.innerHTML = " ";
    }
    else
    {
        rightbutton.innerHTML = "<img src='img/rightarrow.png' alt='Back Button' class='buttonimage2' id='rightbtn'>";
    }
}

// Next/Prev Btns
function GoRight(){
    if (counter < maxcounter){
        leftbutton.style.opacity = 1;
    }
    
    if(counter + 1 == maxcounter){
        rightbutton.style.opacity = 0;
    }

    if (counter < maxcounter)
    {
        counter++;
        length += images[counter-1].clientWidth;
        images[counter-1].style.opacity= 1;
        images[counter-2].style.opacity= 0.5;
        picture.style.transition = "transform 0.4s ease-in-out";
        picture.style.transform = 'translateX(' + (-length) + 'px)';
        ChangeContent(counter);
    }
    console.log(length);

}

function GoLeft(){
    if (counter > 1){
        rightbutton.style.opacity = 1;
    }
    
    if(counter - 1 == 1){
        leftbutton.style.opacity = 0;
    }

    if (counter > 1)
    {
        counter--;
        length -= images[counter-1].clientWidth;
        images[counter-1].style.opacity= 1;
        images[counter].style.opacity= 0.5;
        picture.style.transition = "transform 0.4s ease-in-out";
        picture.style.transform = 'translateX(' + (-length) + 'px)';
        ChangeContent(counter);
    }
    console.log(length);
}


// Back button to home
const backbutton = document.getElementById("backbtn");
backbutton.addEventListener("click", BackToHome);

function BackToHome(){
    window.location.href = "index.html";
}