import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8577973ead545c312dfdf14be58760b9';

export default async function getFilmReviews(movieId) {
  try {
    const resultAPIFilmReviews = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    
    //   console.log(resultAPIFilmReviews);
    
    return resultAPIFilmReviews;
  
  }
  catch (error) {
    throw new Error(error.message);
  };


}