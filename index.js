function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div class="movie col p-3">
<div class="card bg-secondary text-light" style="width: 18rem;">
  <img src="no_image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${currentMovie.Title}</h5>
    <p class="card-text">${currentMovie.Year}</p>
    <a href="#" class="add-button btn btn-warning text" data-imdbid=${currentMovie.imdbID}>Go somewhere</a>
  </div>
</div>
</div>`
  })
  return movieHtmlArray.join(''); //why do we need this?
}

// "Document Ready" block
document.addEventListener('DOMContentLoaded', function () {
  // code here will execute after the document is loaded
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = renderMovies(movieData);
  })

  document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('add-button')) {
      const movieID = e.target.dataset.imdbid; // make sure this works with "ID"
      // console.log(movieID);
    }
  })


});

function saveToWatchlist(movieID) {
  console.log(movieID) // I can't get this to work
  const movie = movideData.find((currentMovie) => {
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);

  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem('watchlist', watchlistJSON);
}
