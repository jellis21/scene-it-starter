// "Document Ready" block
document.addEventListener('DOMContentLoaded', function () {

  let watchlistJSON = localStorage.getItem('watchlist');
  console.log(watchlistJSON);

  let watchlist = JSON.parse(watchlistJSON);
  console.log(watchlist);

  const moviesContainer = document.querySelector('.movies-container');

  moviesContainer.innerHTML = renderMovies(watchlist)

  // Event listener to clear the watchlist  
  const clearWatchlist = document.getElementById('clear-watchlist');

  clearWatchlist.addEventListener('click', () => {
    localStorage.clear();
    moviesContainer.innerHTML = '<div></div>'
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.classList = 'row'
    newDiv.innerHTML = `<div class="col-12 header mt-4 text-center">
      <p><strong>You need to add some movies!</strong></p>
    </div>`
    container.append(newDiv);
  })

})



function renderMovies(movieArray) {

  // "If" statement for if there's nothing in the watchlist
  if (movieArray == null) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.classList = 'row'
    newDiv.innerHTML = `<div class="col-12 header mt-4 text-center">
      <p><strong>You need to add some movies!</strong></p>
    </div>`
    container.append(newDiv);
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