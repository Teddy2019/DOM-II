// Your code goes here
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', function(e){e.target.style.color = "orange";
e.target.style.padding = "10px";
 e.target.style.background = "blue";
setTimeout(function() {e.target.style.color = ""; e.target.style.background = ""}, 1000);}, false);

const htmlTag = document.querySelector('html');
htmlTag.addEventListener('keydown', function(e){
    htmlTag.style.background = 'red';
    setTimeout(function() {htmlTag.style.background = ''}, 1000)
}, false);


const funBuss = document.querySelector('.intro img');
funBuss.addEventListener('dblclick', function(e){
    funBuss.setAttribute('src', 'img/fun2.jpg');
    setTimeout(function() {funBuss.setAttribute('src', 'img/fun-bus.jpg')}, 1000)
}, false);

const thirdImg = document.querySelector('.content-destination img');
window.addEventListener('resize', function(e){
    thirdImg.setAttribute('src', 'img/helicop.jpg')});


window.addEventListener('load', function(e) {
    alert('My fun bus page is loaded');
});
const input = document.querySelector('input');
input.addEventListener('focus', function(e){
    e.target.style.background = 'blue';    
  });

input.addEventListener('select', function(e){
    e.target.style.color = 'red';
});

const destination = document.querySelector('.destination');
destination.addEventListener('wheel', (e) => {
    e.target.style.backgroundColor = 'white';
});

window.addEventListener('scroll', function(e) {
   // alert('Stop scrolling');
});

const delet =document.querySelector('.delet');
delet.addEventListener('mousedown', function(e){
    e.target.style.display = 'none';
});

htmlTag.addEventListener('scroll', function(e) {
    alert('only for html');
});

//propagation

const propagation = document.querySelector('.propagation');
propagation.addEventListener('click', function(e){
    htmlTag.style.background = 'blue';
    e.stopPropagation();
    setTimeout(function() {htmlTag.style.background = ''}, 1000)
}, false);

const home = document.querySelector('.home')
home.addEventListener('click', function(e){
    home.style.background = 'yellow';
    setTimeout(function() {home.style.background = ''}, 1000)
}, false);

//prevent default

const ancor = document.querySelectorAll('a');
ancor.forEach(function(element){element.addEventListener("click", function(e){
    e.preventDefault()
  })});

 console.log(ancor);
  