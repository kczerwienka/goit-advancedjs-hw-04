// Described in the documentation
import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';

import { fetchFunction } from './js/pixabay-api.js';

const searchButton = document.querySelector('button');
const inputBar = document.querySelector('input');
const moreButton = document.querySelector('.more-button');
const moreLoader = document.querySelector('.loader-more');
const endLoader = document.querySelector('.loader-end');

moreButton.style.display = 'none';
moreLoader.style.display = 'none';
endLoader.style.display = 'none';
let moreValue = '';

let i = 1;

searchButton.addEventListener('click', event => {
  searchButton.disabled = true;
  if (!inputBar.value) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter search value',
      position: 'topRight',
    });
  } else {
    i = 1;
    moreValue = inputBar.value;
    fetchFunction(inputBar.value, i);
    moreButton.style.display = 'block';
  }
});

moreButton.addEventListener('click', event => {
  i++;
  fetchFunction(moreValue, i);
});
