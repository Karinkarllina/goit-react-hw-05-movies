import PropTypes from 'prop-types';
import css from './SearchFilm.module.css'


export default function Searchbar({ onClick, value, onChange} ) {

    return (
    <>
        <div className={css.inputMovieWrap}>
            <input className={css.inputMovieSerach}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search films..."
                value={value}
                onChange={event => { onChange(event.target.value) }}
                />
            <button type="submit" onClick={onClick} className={css.inputMovieButton}>Search</button>
        </div>
    </>
    );
}
    

Searchbar.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,

};


