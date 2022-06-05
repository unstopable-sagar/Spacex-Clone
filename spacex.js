"use strict"
// function myFunction() {
// let x = document.getElementsByClassName('box')[0];
// let y = x.getElementsByTagName('p')[0];
// y.style.top = '0';
// y.style.opacity = '1';
// y.style.transition = 'all 800ms';
// let a = x.getElementsByTagName('h1')[0];
// a.style.top = '0';
// a.style.opacity = '1';
// a.style.transition = 'all 900ms';
// let b = x.getElementsByTagName('a')[0];
// b.style.top = '0';
// b.style.opacity = '1';
// b.style.transition = 'all 1000ms';
// }

function myFunction() {
  let a = document.querySelectorAll('.trans-para');
  for (let i = 0; i < a.length; i++) {
    a[i].style.top = '0';
    a[i].style.opacity = '1';
    a[i].style.transition = 'all 800ms';
  }

  let b = document.querySelectorAll('.trans-heading');
  for (let j = 0; j < b.length; j++) {
    b[j].style.top = '0';
    b[j].style.opacity = '1';
    b[j].style.transition = 'all 900ms';
  }

  let c = document.querySelectorAll('.trans-link');
  for (let k = 0; k < b.length; k++) {
    c[k].style.top = '0';
    c[k].style.opacity = '1';
    c[k].style.transition = 'all 900ms';
  }
}

function newClass() {
  document.getElementsByClassName('hamburger')[0].className = 'newBurger';
  document.getElementsByClassName('newBurger')[0].style.transition = 'all 700ms';
}

function closeTab() {
  document.getElementsByClassName('newBurger')[0].className = 'hamburger';
}