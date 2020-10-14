import React, { Component } from 'react';
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchingfromserver } from '../../store/actions/Auth';

class navitation extends Component {

    componentDidMount() {
        this.props.onFetchingUserData()
    }


    render() {
        let name = null;
        if (this.props.userData) {
            for (let users in this.props.userData) {
                console.log(this.props.userData[users].userName);
                if (this.props.userId == this.props.userData[users].userId) {
                    name = this.props.userData[users].userName;
                    console.log(name);
                    break;
                }
            }
        }
        return (
            <div>
                <nav>
                    <ul className={classes.Navigation}>
                        <li className={classes.Navigation_lists}><NavLink to='/'>Home</NavLink></li>
                        <li className={classes.Navigation_lists}><NavLink to='/cart'>Cart</NavLink></li>
                        <li className={classes.Navigation_lists}><NavLink to='/about'>About us</NavLink></li>
                        <li className={classes.Navigation_lists}><NavLink to='/logout'>logout</NavLink></li>
                        <li className={classes.Navigation_lists}><NavLink to='/auth'>Sign-in/ Signup</NavLink></li>
                    </ul>
                </nav>
                <p>{name}</p>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        userData: state.auth.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchingUserData: () => dispatch(fetchingfromserver())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navitation);