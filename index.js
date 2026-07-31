const spinner = document.querySelector("#spinner");
const searchText = document.querySelector(".search__text");
const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search-input");

async function getMovies(event) {
  let search = null;
  if (event) {
    event.preventDefault();
    search = searchInput.value;
  }
  spinner.style.display = "block";
  searchText.style.display = "none";
  try {
    setTimeout(() => {}, 2000);
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=650d264a&s=${search || "fast"}`,
    );
    const data = await response.json();
    console.log(data);

    if (!data.Search) {
      moviesContainer.textContent = "No movies found.";
      return;
    }

    setTimeout(() => {
      renderMovies(data);
    }, 2000);
  } catch (error) {
    moviesContainer.textContent = "Could not load movies. Please try again.";
    console.log(error);
  } finally {
    setTimeout(() => {
      spinner.style.display = "none";

      searchText.style.display = "block";
    }, 2000);
  }
}
getMovies();

function openMenu() {
  document.getElementById("nav-links").classList.toggle("open");
}

function renderMovies(data) {
  moviesContainer.innerHTML = "";
  data.Search.forEach(function (movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <img src="${movie.Poster}" alt="${movie.Title} poster">
            `;
    moviesContainer.appendChild(movieElement);
  });
}