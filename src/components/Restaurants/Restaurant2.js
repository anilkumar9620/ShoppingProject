import React from 'react';
import { connect } from 'react-redux';

import { cartItems } from '../../store/actions/restaurant';

const Restaurant2 = (props) => {
    // console.log(props.restaurants.rest1['burger'].price);
    let items = ['tea', 'coffee'];
    let rendering_items = null;

    const cartHandler = (item, itemValues) => {
        let cartList = {
            restautantName: 'rest2',
            itemName: item,
            imageSrc: itemValues.src,
            price: itemValues.price,
            rating: itemValues.rating
        }
        props.onAddingItemsToCart(cartList)
    }

    if (props.restaurants) {
        let restaurant_items = props.restaurants.rest2;
        rendering_items = items.map(item => {
            return (
                <div key={item}>
                    <h3>{item}</h3>
                    <img src={restaurant_items[`${item}`].src} />
                    <p>{restaurant_items[`${item}`].price}</p>
                    <p>{restaurant_items[`${item}`].rating}</p>
                    <button onClick={() => cartHandler(item, restaurant_items[`${item}`])}>ADD TO CART</button>
                </div>
            );
        });
    }
    return (
        <div>{rendering_items}</div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        restaurants: state.rest.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddingItemsToCart: (cartList) => dispatch(cartItems(cartList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant2);
