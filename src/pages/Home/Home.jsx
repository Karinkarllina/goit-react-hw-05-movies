import { Link } from "react-router-dom"

const Home = () => {
    return <div>{['Popfilm-1', 'Popfilm-2', 'Popfilm-3'].map(film => {
        return (
            <Link key={film} to={`${film}`}>
                {film}
            </Link>
    )})}</div>

    // Юз эффект и запрос 28 мин. 1 видео
    // фильм в шаблонной строке - это то, что будет подставляться в юрл
}



export default Home