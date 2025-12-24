let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let body=document.querySelector("body")
let img=document.querySelector("img")

let btn = document.querySelectorAll("button");

let b1=document.getElementById("btn_on")
b1.addEventListener("click", ()=>{
    h1.innerText="Light Mode";
    body.style.backgroundColor="White"
    h1.style.color="black"
    img.src="16351.jpg";
    b1.style.backgroundColor="white"
    b1.style.color="black"
    b2.style.backgroundColor="black"
    b2.style.color="white"
    
})

let b2=document.getElementById("btn_off")
b2.addEventListener("click", function(){
    h1.innerText="Dark Mode";
    body.style.backgroundColor="black"
    h1.style.color="white"
    img.src="2MB.webp"
    b2.style.backgroundColor="black"
    b2.style.color="white"
})  

setTimeout ( ()=>{
    h1.style.color="Blue"
},2000);

// let url="https://v2.jokeapi.dev/joke/Any?safe-mode"

// img.src.url
