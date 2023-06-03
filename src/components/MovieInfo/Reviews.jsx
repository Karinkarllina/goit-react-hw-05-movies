import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFilmReviews from 'servises/getReviews';
import css from './Reviews.module.css'


const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const[reviewsLength, setReviewsLength] = useState(0);


    useEffect(() => {
        
        getFilmReviews(movieId).then(infoFilm => { 
            
            setReviews(infoFilm.data.results.map(review => (
                <li key={review.id}>
                     <p className={css.reviewAuthor}> Author: {review.author}</p>
                     <p className={css.reviewContent}>{review.content}</p>
            </li> 
            ))) 

            setReviewsLength(infoFilm.data.results.length)



        })
    }, [movieId])
    
    return (
        <div> 
            <ul>
                {reviewsLength !== 0 ? reviews : (<p className={css.noReviews}> No search reviews...</p>)}
            </ul>
        </div>
    )
 }

export default Reviews