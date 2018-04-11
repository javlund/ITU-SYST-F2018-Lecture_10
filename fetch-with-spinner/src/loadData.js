const endpoint = 'http://api.worldbank.org/v2/countries?format=json&per_page=';

async function getCountries(size) {
  const response = await fetch(endpoint + size);
  const json = response.json();
  return json;
}

export {
  getCountries
};