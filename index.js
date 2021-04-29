'use strict';

console.log('funguju');

const changeColor = (event) => {
  const shirtImg = document.querySelector('#product-image');
  const color = event.target.classList.value;

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
