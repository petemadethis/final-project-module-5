document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    const spinner = document.getElementById('spinner');
    
    // Show the spinner
    spinner.style.display = 'inline-block';

    // Simulate a fetch request (replace with your actual search logic)
    setTimeout(() => {
        // Hide the spinner after the "fetch" is done
        spinner.style.display = 'none';
        // Add your search logic here
    }, 2000); // Simulate a 2-second delay
});

function showSpinner(event) {
    event.preventDefault(); // Prevent the default form submission
    const button = document.querySelector('.loading'); // Select the button
    const spinner = document.getElementById('spinner'); // Select the spinner icon

    // Hide the button text and show the spinner
    button.innerHTML = ''; // Remove the button text
    spinner.style.display = 'inline-block'; // Show the spinner

    // Simulate a delay for the search operation (e.g., API call)
    setTimeout(() => {
        // After the search is done, you can hide the spinner and reset the button
        spinner.style.display = 'none'; // Hide the spinner
        button.innerHTML = 'Search'; // Restore the button text
    }, 2000); // Adjust the delay as needed
}

async function getMovies() {
    const moviesContainer = document.getElementById("movies");
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=650d264a&s=fast");
        const data = await response.json();
        console.log(data)
        
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