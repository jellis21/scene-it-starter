// "Document Ready" block
document.addEventListener('DOMContentLoaded', function () {

  let watchlistJSON = localStorage.getItem('watchlist');
  console.log(watchlistJSON);
  
  let watchlist = JSON.parse(watchlistJSON);
  console.log(watchlist);
 
  const moviesContainer = document.querySelector('.movies-container');

  moviesContainer.innerHTML = renderMovies(watchlist)

})

function renderMovies(movieArray) {

  if (movieArray == null) {
    return `<p>Your watchlist needs some movies!</p>`
  }

  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div class="movie col p-3">
<div class="card bg-secondary text-light" style="width: 18rem;">
<img src=${currentMovie.Poster} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${currentMovie.Title}</h5>
  <p class="card-text">${currentMovie.Year}</p>
  <a href="#" class="add-button btn btn-warning text" data-imdbid=${currentMovie.imdbID}>Add to Watchlist</a>
</div>
</div>
</div>`
  })
  return movieHtmlArray.join(''); //Why do we need this? Because HTML can only read strings, and the above is JS. So you need the .join('') to convert to a string.
}