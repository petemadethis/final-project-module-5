async function getMovies() {
    const moviesContainer = document.getElementById("movies");
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=650d264a&s=fast");
        const data = await response.json();
        console.log(data)
        debugger;
        if (!data.Search) {
            moviesContainer.textContent = "No movies found.";
            return;
        }
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
    } catch (error) {
        moviesContainer.textContent = "Could not load movies. Please try again.";
        console.log(error);
    }
}
getMovies();