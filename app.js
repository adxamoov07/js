

  const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let index = 0;

function rotateCarousel() {
  images.forEach((image) => {
    image.classList.remove('active');
  });

  images[index].classList.add('active');
  index = (index + 1) % images.length;
}

setInterval(rotateCarousel, 3000);

let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = '';
  result.value = '';
}

function calculate() {
  try {
    let output = eval(expression);
    result.value = output;
    expression = '';
  } catch (error) {
    result.value = 'Error';
  }
}
  