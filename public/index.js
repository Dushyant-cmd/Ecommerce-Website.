// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const caro = Array.from(carousel.children);
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -1743;

// Add the click events
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX ) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});
//typewriter effect in heading of home-page
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;
    //livemode razorpay
//KEY_ID = rzp_live_iTaIvyjAYm8DQF
//SECRET_KEY = eKWwH6SmFvrarktzNEAxfIyl

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//Hamburger menu 
const navslide = () =>{
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav-ul');
  const nav_li = document.querySelectorAll('.nav-ul li');

  //onclick ham show navbar
  hamburger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');  

    //animate nav links
    nav_li.forEach((items, index)  =>{
      if(items.style.animation){
        items.style.animation = '';
      }
      else{
        items.style.animation = `nav-ul-fade 0.5s ease forwards ${index / 10 + 0}s`;
      }
    });

    hamburger.classList.toggle('toggle')
  })

  
}

navslide();


//for sign-up err close btn 
function remove() {
  const errcont = document.querySelector('.err-cont');
  const removebtn = document.querySelector('.rem-btn');
  

  errcont.classList.toggle('hideerr')
}

function alert_logout(){
  confirm("are you sure to log-out from atarmart")
}