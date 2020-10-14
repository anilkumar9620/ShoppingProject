import React from 'react';
import classes from './Search.css';
const search = () => {
    return (
        <input className={classes.Search}
            onChange={(event) => event.target.value}
            placeholder='Enter your search' value='' />
    )
}

export default search;