import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import getPopularFilms from "servises/getPopularFilms";

const Home = () => {

    const [popularFilms, setPopularFilms] = useState([]);

    useEffect(() => { 
        getPopularFilms().then(film => { setPopularFilms(film.data.results) })
    }, []);

// console.log(popularFilms)

    return  (
        <>
            <h1>Trending today</h1>
            <ul>
                {popularFilms.map(popularFilm => (
                    <li key={popularFilm.id}>
                        <Link to={`/movies/${popularFilm.id}`}>
                            {popularFilm.title}
                        </Link> 
                    </li>         
                ))}   
            </ul>

        </>

    )
}

export default Home