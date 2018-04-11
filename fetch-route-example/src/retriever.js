const baseUrl = 'https://dog.ceo/api';

function getBreeds() {
  return fetch(`${baseUrl}/breeds/list`)
    .then(data => data.json());
}

function getImageForBreed(breed) {
  return fetch(`${baseUrl}/breed/${breed}/images/random`)
    .then(data => data.json());
}

export {
  getBreeds,
  getImageForBreed
};