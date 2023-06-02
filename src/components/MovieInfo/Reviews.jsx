import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFilmReviews from 'servises/getReviews';


const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        getFilmReviews(movieId).then(infoFilm => { 
            setReviews(infoFilm.data.results.map(review => (
                <li key={review.id}>
                     <p>{review.author}</p>
                     <p>{review.content}</p>
                  </li>

            )))
        })
    }, [movieId])
    
    return <div> 
        <ul>
            {reviews}
        </ul>
    </div>
 }

export default Reviews