function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
return `<div class="movie col p-3">
<div class="card bg-secondary text-light" style="width: 18rem;">
  <img src="no_image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${currentMovie.Title}</h5>
    <p class="card-text">${currentMovie.Year}</p>
    <a href="#" class="add button btn btn-warning text">Go somewhere</a>
  </div>
</div>
</div>`
  })
  return movieHtmlArray.join(''); //why do we need this?
}

document.addEventListener('DOMContentLoaded', function () {
  // code here will execute after the document is loaded
  const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', (e) => {
e.preventDefault();
const moviesContainer = document.querySelector('.movies-container');
moviesContainer.innerHTML = renderMovies(movieData);
})
});