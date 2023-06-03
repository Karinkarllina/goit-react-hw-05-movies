import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFilmCast from 'servises/getCast';
import css from './Cast.module.css'


const Cast = () => {

   const { movieId } = useParams();

   const [cast, setCast] = useState([]);
    
   useEffect(() => { 
      getFilmCast(movieId).then(infoFilm => {
         setCast(infoFilm.data.cast.map(actor => (
                  <li key={actor.cast_id} >
                     {<img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={`${actor.name}`} width="100" onError={ event => {event.target.src= 'https://www.coachhousevets.com/wp-content/uploads/2023/04/no-photo-icon-22.png'}}/>}
                     <p className={css.actorName}>{actor.name}</p>
                     <p className={css.actorCharacter}>Character: {actor.character}</p>
                  </li>
               ))
         )
      })
   }, [movieId])

   return <div> 
      <ul>
         {cast}
       </ul>
    </div>
 }

export default Cast












