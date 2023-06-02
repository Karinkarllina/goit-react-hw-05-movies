import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Searchbar from "components/SearchFilm/SearchFilm"
import getSearchMovies from 'servises/getSearchMovies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Movies = () => {

    const [searchQuery, setsearchQuery] = useState('');
    const [movies, setMovies] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();


    const paramMovieSearch = searchParams.get('movieSearch') ?? '';
    // console.log(movieSearch)

    
    const handleClick = () => {
        if (searchQuery.trim() === '') {
            Notify.info('Please enter your request and try again');
            setSearchParams('')
            return
        }
        // console.log(searchQuery)
        updateQueryString(searchQuery);
        setsearchQuery('');
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
                
        });
    }
        setMovies('');
  }, [paramMovieSearch]);


// console.log(movies)


 
    return (
        <>
            <Searchbar value={searchQuery} onChange={setsearchQuery} onClick={handleClick} />

            {movies &&
                ( <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
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