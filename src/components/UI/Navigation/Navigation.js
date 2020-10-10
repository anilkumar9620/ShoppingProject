import React from 'react';
import classes from './Navigation.css';

const navitation = () => {
    return (
        <nav>
            <ul className={classes.Navigation}>
                <li className={classes.Navigation_lists}><a href='/'>Home</a></li>
                <li className={classes.Navigation_lists}><a href='/'>Cart</a></li>
                <li className={classes.Navigation_lists}><a href='/'>About us</a></li>
            </ul>
        </nav>
    )
}

export default navitation;