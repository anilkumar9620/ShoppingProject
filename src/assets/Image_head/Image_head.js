import React from 'react';
import classes from '../images.css';
import imageHeader from './imageHead.jpg';
const imageHead = () => {
    return (
        <div>
            <img className={classes.mainImage}
                src={imageHeader} alt='image main' />
        </div>
    )
}

export default imageHead;