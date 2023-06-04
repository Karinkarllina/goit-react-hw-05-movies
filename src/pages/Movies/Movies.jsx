import { useState, useEffect } from 'react';
import { Link, useLocation  } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Searchbar from "components/SearchFilm/SearchFilm"
import getSearchMovies from 'servises/getSearchMovies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './movies.module.css'


const Movies = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const paramMovieSearch = searchParams.get('movieSearch') ?? '';
    
    const [searchQuery, setsearchQuery] = useState(paramMovieSearch);
    const [movies, setMovies] = useState('');

    const location = useLocation();

 
    // console.log(movieSearch)

    
    const handleClick = () => {
        if (searchQuery.trim() === '') {
            Notify.info('Please enter your request and try again');
            setSearchParams('')
            return
        }
        // console.log(searchQuery)
        updateQueryString(searchQuery);
        // setsearchQuery('');
    }



    const updateQueryString = movieSearch => {
        const nextParams = movieSearch !== '' ? { movieSearch } : {};
        setSearchParams(nextParams);

        // console.log(movieSearch)
    };




    useEffect(() => {
        if (paramMovieSearch !== '') {
            getSearchMovies(paramMovieSearch).then(movies => {
                setMovies(movies.data.results); 
                
                if (movies.data.results.length === 0) {
                    Notify.info('Ooops! No search! Try again.'); 
            }
            })

    }
        setMovies('');
  }, [paramMovieSearch]);


// console.log(movies)


    return (
        <>
            <Searchbar value={searchQuery} onChange={setsearchQuery} onClick={handleClick} />

            {movies &&
                ( <ul className={css.searchMovieList}>
                    {movies.map(movie => (
                        <li key={movie.id} className={css.searchMovieItem}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.searchMovieLink}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>) 
            }
        </> 
    )

}

export default Movies