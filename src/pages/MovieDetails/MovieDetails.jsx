import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import getMovieDetails from 'servises/getMovieInfo';

const MovieDetails = () => {

   const [movieInfo, setmovieInfo] = useState({});


   const { movieId } = useParams();

  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/') ;

   useEffect(() => { 

      getMovieDetails(movieId).then(movie => {
         setmovieInfo(movie.data);  
         console.log(movie.data)
      })
 }, [movieId]);

if(movieInfo.id)
   return (
      <>
         <Link to={backLocationRef.current}>
                     <button type='button' >Go Back</button>
         </Link>

      <ul>
            <li>
               <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`${movieInfo.title}`} />
               <div>
               <h2>{movieInfo.title} <span>({movieInfo.release_date.slice(0, 4)})</span></h2>
               <p>{`User score: ${Math.round(movieInfo.vote_average * 10)}%`}</p>
               <h3>Overview</h3>
               <p>{movieInfo.overview}</p> 
               <h3>Genres</h3> 
               <p>{movieInfo.genres.map(genre => (<span key={genre.id}> {genre.name} </span> ))}</p>   
               </div>
            </li>
         </ul>
         <div>
         <p>Additional Information</p>
            <div>
               <ul>
                  <li>
            <Link to="cast"  >
               Cast
            </Link>                     
                  </li>
                  <li>
            <Link to="reviews" >
               Reviews
            </Link>                          
                  </li>
               </ul>
            </div>
         <Outlet/>  
         </div>
 
      </>
   )

}

export default MovieDetails
