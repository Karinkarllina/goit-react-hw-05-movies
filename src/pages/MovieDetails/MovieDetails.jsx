import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import getMovieDetails from 'servises/getMovieInfo';
import css from './MovieDetails.module.css'

const MovieDetails = () => {

   const [movieInfo, setmovieInfo] = useState({});


   const { movieId } = useParams();

  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/') ;

   useEffect(() => { 

      getMovieDetails(movieId).then(movie => {
         setmovieInfo(movie.data);  
         // console.log(movie.data)
      })
 }, [movieId]);

if(movieInfo.id)
   return (
      <>
         <Link to={backLocationRef.current}>
                     <button type='button' className={css.buttonBack} >Go Back</button>
         </Link>
         
      <ul>
            <li className={css.movieFlexWrap}>
               <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`${movieInfo.title}`} className={css.movieimg} width="300"/>
               <div className={css.movieInfo}>
               <h2>{movieInfo.title} <span>({movieInfo.release_date.slice(0, 4)})</span></h2>
                  <p className={css.movieScore}> {`User score: ${Math.round(movieInfo.vote_average * 10)}%`}</p>
               <h3>Overview</h3>
               <p className={css.movieOverview}>{movieInfo.overview}</p> 
               <h3>Genres</h3> 
               <p className={css.movieGenres}>{movieInfo.genres.map(genre => (<span key={genre.id}> {genre.name} </span> ))}</p>   
               </div>
            </li>
         </ul>
         <div>
            <Suspense fallback={<div> Loading...</div>}>
               <div className={css.movieAdditionalInfoWrap}>
                  <p className={css.movieAdditionalInfo}>Additional Information</p>
                  <div>
                     <ul className={css.movieAdditionalInfoList}>
                        <li className={css.movieAdditionalInfoItem}>
                           <Link to="cast" className={css.movieAdditionalInfoLink} >
                              Cast
                           </Link>                     
                        </li>
                        <li className={css.movieAdditionalInfoItem}>
                           <Link to="reviews" className={css.movieAdditionalInfoLink}>
                              Reviews
                           </Link>                          
                        </li>
                     </ul>
                  </div>
               </div>
               <Outlet />  
            </Suspense>
            </div>
      </>
   )

}

export default MovieDetails
