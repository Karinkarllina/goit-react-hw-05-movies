import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8577973ead545c312dfdf14be58760b9';


export default async function getSearchMovies(movieSearch) { 
  try {
    // console.log(movieSearch)

    
    const resultSearchMovie = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${movieSearch}&page=1`)
    
      console.log(resultSearchMovie);

    return resultSearchMovie ;
  
  }
  catch (error) {
    throw new Error(error.message);
  };
}