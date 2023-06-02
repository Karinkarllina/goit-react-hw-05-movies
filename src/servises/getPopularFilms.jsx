import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8577973ead545c312dfdf14be58760b9';


export default async function getPopularFilms() {
  try {
    const resultAPIPopFilms = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`)
    // console.log(resultAPIPopFilms);

    return resultAPIPopFilms;
  
  }
  catch (error) {
    throw new Error(error.message);
  };


}


