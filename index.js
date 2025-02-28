// "Document Ready" block
document.addEventListener('DOMContentLoaded', function () {
  // code here will execute after the document is loaded
  const searchButton = document.getElementById('search-button');
  const moviesContainer = document.querySelector('.movies-container');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchString = document.querySelector('.search-bar').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    fetch('http://www.omdbapi.com/?apikey=59354c85&s=' + urlEncodedSearchString)
      .then((response) => { return response.json(); })
      .then((data) => {
        const movieHTML = renderMovies(data.Search);
        moviesContainer.innerHTML = movieHTML;
        movieData = data.Search; // why does this work?
      })

    moviesContainer.addEventListener('click', (e) => {
      // console.log(e.target.tagName);
      e.preventDefault();
      if (e.target.classList.contains('add-button')) {
        const movieID = e.target.dataset.imdbid;
        saveToWatchlist(movieID);
      }
    })
  })
});

  function renderMovies(movieArray) {
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



function saveToWatchlist(movieID) {
  const movie = movieData.find((currentMovie) => { // See movieData = data.Search above
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

