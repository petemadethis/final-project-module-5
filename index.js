async function getMovies() {
   const response = await fetch("http://www.omdbapi.com/?apikey=650d264a&s=fast");
   const data = await data.json();
    }
getMovies();