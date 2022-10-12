// 랜덤 명언 
const quotes = [{
    quote: "No pain, no gain",
    author: "whoever",
  },
  {
    quote: "No sweat, no sweet",
    author: "whoever",
  },
  {
    quote: "Life is unfair, get used to it",
    author: "whoever",
  },
  {
    quote: "If you can’t make it good, at least make it look good",
    author: "whoever",
  },
  {
    quote: "If you ate coffee, start work",
    author: "whoever",
  },
  {
    quote: "Thoughts are the shadows of our feelings - always darker, emptier, and simpler",
    author: "whoever",
  },
  {
    quote: "To live is to suffer, to survive is to find some meaning in the suffering",
    author: "whoever",
  },
  {
    quote: "There are no facts, only interpretations",
    author: "whoever",
  },
  {
    quote: "We forge the chains we wear in life",
    author: "whoever",
  },
  {
    quote: "Man exists only as far as he knows it",
    author: "whoever",
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Math.random() * 10;

// Math.round(); 인자를 반올림
// Math.ceil(); 인자를 올림
// Math.floor(); 인지를 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// 랜덤 이미지

const images = ['bg01.jpg', 'bg02.jpg', 'bg03.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `../img/${chosenImage}`;

// const loginForm = document.querySelector('login-form');
// document.body.appendChild(bgImg);
// 앞에 붙이기
document.body.insertBefore(bgImg, loginForm);