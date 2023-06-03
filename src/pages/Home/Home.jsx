import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import getPopularFilms from "servises/getPopularFilms";
import css from './Home.module.css'



const Home = () => {

    const [popularFilms, setPopularFilms] = useState([]);
    const location = useLocation();

    useEffect(() => { 
        getPopularFilms().then(film => { setPopularFilms(film.data.results) })
    }, []);

// console.log(popularFilms)

    return  (
        <>
            <h1 className={css.homeTitle}>Trending today</h1>
            <ul className={css.homeTerndingList}> 
                {popularFilms.map(popularFilm => (
                    <li key={popularFilm.id} className={css.homeTerndingItem}>
                        <Link to={`/movies/${popularFilm.id}`} state={{ from: location }} className={css.homeTerndingLink}>
                            {popularFilm.title}
                        </Link> 
                    </li>         
                ))}   
            </ul>

        </>

    )
}

export default Home