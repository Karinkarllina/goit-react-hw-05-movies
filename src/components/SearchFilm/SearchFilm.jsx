import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Searchbar({ onClick, value, onChange} ) {

    // console.log(value + value)
    



    return (
    <>
        <div>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search films"
                value={value}
                onChange={event => { onChange(event.target.value) }}
                />
            <button type="submit" onClick={onClick}>Search</button>
        </div>
    </>
    );
}
    


