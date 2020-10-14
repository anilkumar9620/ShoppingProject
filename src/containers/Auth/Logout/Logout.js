import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/Auth';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
    }
    render() {
        return (
            <h1>logged out</h1>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);