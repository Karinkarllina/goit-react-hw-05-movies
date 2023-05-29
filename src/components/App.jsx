import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './MovieInfo/Cast';
import Reviews from './MovieInfo/Reviews';

export const App = () => {
    return <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/movies/:movieId" element={<MovieDetails/>} />
            <Route path="/movies/:movieId/cast" element={<Cast/>} />
            <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
        </Routes>
    </div>
}