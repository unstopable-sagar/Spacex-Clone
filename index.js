"use strict"

// helper function
function changeCss(item,top,opacity,transition){
  item.style.top = top;
  item.style.opacity = opacity;
  item.style.transition = transition;
}

function myFunction() {
  let a = document.querySelectorAll('.trans-para');
  // a.forEach(item => {
  //   item.style.top = '0';
  //   item.style.opacity = '1';
  //   item.style.transition = 'all 800ms';
  // })
  a.forEach(item => changeCss(item,'0','1','all 800ms'))
  
  let b = document.querySelectorAll('.trans-heading');
  b.forEach(item => changeCss(item,'0','1','all 900ms'))
  
  let c = document.querySelectorAll('.trans-link');
  c.forEach(item => changeCss(item,'0','1','all 900ms'))
}

function newClass() {
  let trans = document.getElementsByClassName('hamburger')[0];
  trans.className = 'newburger';
  trans.style.transition = 'all 400ms';
}

function closeTab() {
  document.getElementsByClassName('newburger')[0].className = 'hamburger';
}