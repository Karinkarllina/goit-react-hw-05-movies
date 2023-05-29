import { Link } from "react-router-dom"


const Movies = () => {
    return <div>{['SearchFilm-1', 'SearchFilm-2', 'SearchFilm-3'].map(film => {
        return (
            <Link key={film} to={`${film}`}>
                {film}
            </Link>
    )})}</div>

}

export default Movies