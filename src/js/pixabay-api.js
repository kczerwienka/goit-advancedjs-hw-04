// Described in the documentation
import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';

import { renderPhotos, clearGallery } from './render-functions.js';

import axios from 'axios';

var API_KEY = '47376754-ed05d64ddcb60a2a475f4c9e7';
const searchButton = document.querySelector('.start-button');
const moreButton = document.querySelector('.more-button');
const loader = document.querySelector('.loader');
const moreLoader = document.querySelector('.loader-more');
const endLoader = document.querySelector('.loader-end');

async function fetchUsers(q, i, image_type, orientation, safesearch) {
  const response = await axios.get(
    'https://pixabay.com/api/?key=' +
      API_KEY +
      '&q=' +
      encodeURIComponent(q) +
      '&image_type=' +
      encodeURIComponent(image_type) +
      '&orientation=' +
      encodeURIComponent(orientation) +
      '&safesearch=' +
      encodeURIComponent(safesearch) +
      '&page=' +
      encodeURIComponent(i) +
      '&per_page=' +
      encodeURIComponent(15)
  );
  return response.data;
}

export async function fetchFunction(
  q,
  i,
  image_type = 'photo',
  orientation = 'horizontal',
  safesearch = true
) {
  if (i == 1) {
    loader.style.display = 'inline-block';
  } else {
    moreLoader.style.display = 'block';
    moreButton.style.display = 'none';
  }

  try {
    const data = await fetchUsers(q, i, image_type, orientation, safesearch);
    console.log(data);

    if (i >= data.totalHits / 15) {
      moreButton.style.display = 'none';
      endLoader.style.display = 'block';
    } else {
      moreButton.style.display = 'block';
      endLoader.style.display = 'none';
    }

    if (data.totalHits > 0) {
      // console.log(data.hits);
      if (i == 1) {
        clearGallery();
      }

      data.hits.forEach(element => {
        // console.log(
        //   element.largeImageURL,
        //   element.previewURL,
        //   element.tags,
        //   element.likes,
        //   element.views,
        //   element.comments,
        //   element.downloads
        // );
        renderPhotos(
          element.largeImageURL,
          element.previewURL,
          element.tags,
          element.likes,
          element.views,
          element.comments,
          element.downloads,
          i
        );
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'No results for this search',
        position: 'topRight',
      });
    }
    // console.log('xd');
    searchButton.disabled = false;
    loader.style.display = 'none';
    moreLoader.style.display = 'none';
    moreButton.style.display = 'block';

    if (i > 1) {
      const item = document.querySelector('.gallery-item');
      const params = item.getBoundingClientRect();
      window.scrollBy(0, params.height * 2 + 64);
    }
  } catch (error) {
    // Error handling
  }
}
