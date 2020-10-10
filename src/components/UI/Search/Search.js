import React from 'react';
import classes from './Search.css';
const search = () => {
    return (
        <input className={classes.Search}
            placeholder='Enter your search' value='' />
    )
}

export default search;