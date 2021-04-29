'use strict';

console.log('funguju');

let color = '';

const changeColor = (event) => {
  const shirtImg = document.querySelector('#product-image');
  color = event.target.classList.value;

  if (color === 'white') {
    shirtImg.style = 'fill: white';
  } else if (color == 'black') {
    shirtImg.style = 'fill: black';
    shirtImg.style.stroke = 'white';
  } else if (color === 'red') {
    shirtImg.style = 'fill: #9d3232';
  } else if (color === 'blue') {
    shirtImg.style = 'fill: skyblue';
  } else {
    console.log('Nastala chyba uvnitř funkce changeColor.');
  }
};

document.querySelectorAll('.button-div > button').forEach((item) => {
  item.addEventListener('click', changeColor);
});

document.querySelector('.product__order').addEventListener('click', () => {
  const timeNow = new Date();
  console.log(`The customer orders a ${color} shirt on date: ${timeNow}.`);
});
