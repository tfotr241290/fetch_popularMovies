const url = 'https://api.themoviedb.org/3/movie/436270?api_key=4125d5c1ddacae373a5219254ef25e65'

const requestMOvie = async(url) =>{
    try{
        const response = await fetch(url);
        console.log(response);

        if(response.status === 200){
            const data = await response.json();
            console.log(data);
            displayData(data);
        }else if(response.status === 401){
            console.log('Ups, something went wrong...')
        }else if(response.status === 404){
            console.log('The requested movie, does not exist, please check your url')
        }
    }catch(error){
        console.log(error);
    }
}

const displayData = (data) =>{
    results = data; 
    const content = `<img class="movie-img"src="https://image.tmdb.org/t/p/w500/${results.poster_path}" alt="Image of ${results.title}"> <h1>${results.title} (${results.release_date})</h1> <section class="overview"> <h3>Overview</h3><p>${results.overview}</p></section> <section class="revenue"><h3>Revenue</h3><p>$ ${results.revenue}</p></section> <section class="pop"><h3>Popularity</h3><p>${results.popularity}</p></section> <section class="dur"><h3>Duration</h3><p>${results.runtime} min</p></section>`;
    outputDiv = document.querySelector('#container').innerHTML = content;
}

requestMOvie(url);