const baseUrl = 'https://dog.ceo/api';

async function getBreeds() {
  const response = await fetch(`${baseUrl}/breeds/list`);
  return await response.json();
}

async function getImageForBreed(breed) {
  const response = await fetch(`${baseUrl}/breed/${breed}/images/random`);
  return await response.json();
}

export {
  getBreeds,
  getImageForBreed
};