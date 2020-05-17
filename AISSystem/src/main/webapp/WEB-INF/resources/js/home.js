const p = document.getElementById('authors'); // Get the list where we will place our authors
const url = '/AISSystem/api/v1/user';
fetch(url).then(function(response) {
  response.text().then(function(text) {
    p.innerHTML = text;
  });
});