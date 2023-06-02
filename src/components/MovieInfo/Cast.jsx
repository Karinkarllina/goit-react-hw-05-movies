import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFilmCast from 'servises/getCast';


const Cast = () => {

   const { movieId } = useParams();

   const [cast, setCast] = useState([]);
    
   useEffect(() => { 
      getFilmCast(movieId).then(infoFilm => {
         setCast(infoFilm.data.cast.map(actor => (
                  <li key={actor.cast_id}>
                     <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}/>
                     <p>{actor.name}</p>
                     <p>Character: {actor.character}</p>
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












