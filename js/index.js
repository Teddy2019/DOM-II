// Your code goes here
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', function(e){e.target.style.color = "orange";
e.target.style.padding = "4px";
 e.target.style.background = "black";
setTimeout(function() {e.target.style.color = ""; e.target.style.background = ""}, 500);}, false);
console.log(nav);