import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxillary/Auxillary';
import ImageSlidng from '../../components/ImageSliding/ImageSliding';
import classes from './Shopping.css';
// import axios from 'axios';
import { initRestaurants } from '../../store/actions/restaurant';

class Shopping extends Component {
    // state = {
    //     restautants: null
    // }

    componentDidMount() {
        // axios.get('https://project2-5125d.firebaseio.com/restaurants.json')
        //     .then(response => {
        //         this.setState({
        //             restautants: response.data
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        this.props.onInitRestaurants()
    }
    onPageChange = (igkey) => {
        this.props.history.push('/' + `${igkey}`);
    }
    render() {

        let restaurantSummary;
        if (this.props.restaurants) {
            restaurantSummary = Object.keys(this.props.restaurants)
                .map((igKey, index) => {
                    // console.log(this.props.restaurants[`${igKey}`]['burger'])
                    return (
                        <div key={igKey} className={classes.RestaurantTemplate}
                            onClick={() => this.onPageChange(igKey)}>
                            <div>
                                {igKey}
                            </div>
                        </div>);
                });

        }

        // if (this.state.restautants) {
        //     let x = ['burger', 'pizza']
        //     let rest1 = 'rest1'
        //     const items = {
        //         // ...this.state.restautants.rest1[`${x[1]}`]
        //         ...this.state.restautants[`${rest1}`]['burger']
        //     }
        //     console.log(items.price);
        // }


        return (
            <Aux>
                <ImageSlidng />
                {restaurantSummary}
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        restaurants: state.rest.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitRestaurants: () => dispatch(initRestaurants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);