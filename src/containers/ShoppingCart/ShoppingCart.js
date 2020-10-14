import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCartOrders, deleteCartOrders } from '../../store/actions/restaurant';

class ShoppingCart extends Component {
    componentDidMount() {
        this.props.onFetchCartOrders();
    }

    render() {
        let cartOrders = null;
        if (this.props.cart) {
            cartOrders = this.props.cart.map(item => {
                console.log(item.id);
                return (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.imgageSrc}</p>
                        <p>{item.itemName}</p>
                        <p>{item.price}</p>
                        <p>{item.rating}</p>
                        <p>{item.restaurantName}</p>
                        {item.id ? <button
                            onClick={() => { this.props.onCartOrdersDelete(item.id) }}>delete</button> : null}
                    </div>
                )
            });
        }
        return (
            <div>{cartOrders}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // cart: state.cart.cartData
        cart: state.rest.cartData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCartOrders: () => dispatch(fetchCartOrders()),
        onCartOrdersDelete: (orderId) => dispatch(deleteCartOrders(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);