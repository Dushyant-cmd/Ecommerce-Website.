document.addEventListener('DOMContentLoaded', ()=>{
function fetchData() {
  fetch('http://localhost/filterdata.json')
  .then( response => response.json() )
  .then( data => searchdom(data) )
}

function searchdom (data) {
  const pd_maincont = document.querySelector('.product-main-cont');
  const maincont = document.querySelector('.main-cont');
  if(data.length > 0){
   for (let i=0; i<data.length; i++) {
    //creating element for search results
    const cont_child = document.createElement('div');
    const a_img = document.createElement('a');
    const img = document.createElement('img');
    const divtext = document.createElement('div');
    const a_h1 = document.createElement('a');
    const h1 = document.createElement('h1');
    const a_p = document.createElement('a');
    const p = document.createElement('p');
    const divbtn = document.createElement('div');
    const a_buybtn = document.createElement('a');
    const buybtn = document.createElement('button');
    const a_detbtn = document.createElement('a');
    const detailsbtn = document.createElement('button');

    buybtn.innerHTML = "Buy";
    detailsbtn.innerHTML = "Details";
    // h1.innerHTML = "$1000";
    // p.innerHTML = "You really don’t want to get spendy on silver or gold fill wire until you figure out what you’re doing. Copper wire or other base metal wire will help you get a feel.";

    //adding classes to element that we created
    cont_child.className = 'cont-child';
    img.src = data[i].img_src;
    a_img.href = data[i].title;
    divtext.className = 'text';
    a_h1.href = data[i].title;
    h1.className = 'tit';
    a_p.href = data[i].title;
    p.className = 'des';
    divbtn.className = 'buy-btn';
    a_buybtn.href = '/Order-Process-Details';
    buybtn.type = 'submit';
    a_detbtn.href = data[i].title;
    detailsbtn.className = 'dt-btn';
    detailsbtn.type = 'submit';

    //append created element to main container or it's actual container
    a_img.append(img);
    a_h1.append(h1);
    a_p.append(p);
    a_buybtn.append(buybtn);
    a_detbtn.append(detailsbtn);
    divbtn.append(a_buybtn, a_detbtn);
    divtext.append(a_h1, a_p, divbtn);
    cont_child.append(a_img, divtext);
    maincont.append(cont_child);

    h1.innerHTML = data[i].heading;
    p.innerHTML = data[i].description;
   }
  }
  else{
    let msg = document.createElement('h1');
    msg.className = 'no-result';
    msg.innerHTML = data.length + " Results Found";
    maincont.append(msg);
  }
}
fetchData();
})

//for nav toggler functionality
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

// paybtn logic
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone_no = document.querySelector("#phone_no");
const savebtn = document.querySelector("[type=submit]");
const paybtn = document.querySelector(".o_prc");

if(username.value != "" && username.value != "undefined" || email.value != "" && email.value != "undefined" || address.value != "" && address.value != "undefined" || phone_no.value != "" &&  phone_no.value != "undefined"){
  savebtn.removeAttribute("disabled")
  savebtn.classList.remove("dis")
}
savebtn.addEventListener("click", (e) => {
  paybtn.removeAttribute("disabled");
});