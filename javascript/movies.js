const url = 'https://api.themoviedb.org/3/movie/436270?api_key=4125d5c1ddacae373a5219254ef25e65'

const link = 'https://api.themoviedb.org/3/movie/436270/credits?api_key=4125d5c1ddacae373a5219254ef25e65'

const requestMOvie = async(url,link) =>{

    const response = await fetch(url);
    const response2 = await fetch(link);
    console.log(response);
    console.log(response2);

    if(response.status === 200 || response2.status ===200){
        const data = await response.json();
        const data2 = await response2.json();
        console.log(data);
        console.log(data2)
        displayData(data,data2);
    }
    else if(response.status === 401){
        console.log('Ups, something went wrong...')
    }
    else if(response.status === 404){
        console.log('The requested movie, does not exist, please check your url')
    }    
}

const displayData = (data,data2) =>{
    results = data; 
    results2 = data2;
    const content = `<img class="movie-img"src="https://image.tmdb.org/t/p/w500/${results.poster_path}" alt="Image of ${results.title}">
    <h1>${results.title} (${results.release_date})</h1>
    <p class="genres">Genres: ${results.genres[0].name}, ${results.genres[1].name}, ${results.genres[2].name}.</p>
    <section class="overview"> <h3>Overview</h3><p>${results.overview}</p></section> <section class="revenue"><h3>Revenue</h3><p>$ ${results.revenue}</p></section> <section class="pop"><h3>Popularity</h3><p>${results.popularity}</p></section> <section class="dur"><h3>Duration</h3><p>${results.runtime} min</p></section> <section class="cast"><p>Cast: ${results2.cast[0].name}, ${results2.cast[1].name}, ${results2.cast[2].name}, ${results2.cast[3].name}, ${results2.cast[4].name}.</p></section>`;
    document.querySelector('#container').innerHTML = content;
    
}


requestMOvie(url,link);