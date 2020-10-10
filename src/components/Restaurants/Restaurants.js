import React from 'react';
import { connect } from 'react-redux';
const Restaurant1 = (props) => {
    console.log(props.restaurants.rest1['burger'].price);
    return (
        <div>hi</div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        restaurants: state.rest.restaurants
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onInitRestaurants: () => dispatch(initRestaurants())
//     }
// }

export default connect(mapStateToProps)(Restaurant1);
