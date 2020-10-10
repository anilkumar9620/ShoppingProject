import React from 'react';
import Search from '../UI/Search/Search';
import Navigation from '../UI/Navigation/Navigation';
import classes from './Toolbar.css'
import ImageHead from '../../assets/Image_head/Image_head';
const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <ImageHead />
            <Search />
            <Navigation />
        </div>

    )
}

export default toolbar;