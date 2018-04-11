function tjekNavn(event) {
  event.preventDefault();
  const navn = document.getElementById('navn').value;
  if(navn.length < 2) {
    return;
  }
  fetch(`https://api.genderize.io/?name=${navn}&country_id=dk`)
    .then(response => response.json())
    .then(json => document.getElementById('resultat').innerHTML = JSON.stringify(json, null, 2));
}

