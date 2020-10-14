import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, postUserDataToTheServer } from '../../store/actions/Auth';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import classes from './Auth.css';

//AIzaSyCUYN-alaGaa9jxbNoq3nu9pzOwwxgIsds

class Auth extends Component {
    state = {
        controls: {
            name: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'enter name'
                },
                value: ''
            },
            email: {
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail address'
                },
                value: ''
            },
            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Pawword'
                },
                value: ''
            }
        },
        isSignup: true
    }

    /****************************************************
     * INPUT CHANGED HANDLER
     **************************************************/

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
            }

        }
        this.setState({
            controls: updatedControls
        })
    };

    /***************************************
     * FORM SUBMIT HANDLER
     **************************************/
    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignup, this.state.controls.name.value);
        // this.props.onPostingUserData(this.state.controls.name.value, this.props.userId)
    }

    /***************************************
     *  DISPLAYING REGISTER PAGE
     **************************************/
    registerPage = () => {
        console.log(this.state.isSignup)
        this.setState({ isSignup: true })
    }

    /***************************************
     *  DISPLAYING SIGNIN PAGE
     **************************************/

    signInPage = () => {
        console.log(this.state.isSignup)
        this.setState({ isSignup: false })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let signUpFormElement = formElementsArray.map(formElement => {
            return (
                <Input
                    key={formElement.id}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
            )
        });

        const signInFormElementsArray = [formElementsArray[1], formElementsArray[2]]

        let signInformElement = signInFormElementsArray.map(formElement => {
            return (
                <Input
                    key={formElement.id}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
            )
        })


        let formData = null;
        if (this.state.isSignup) {
            formData = signUpFormElement
        } else {
            formData = signInformElement
        }



        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = (
                <h2>YOu havve successfully logged in</h2>
            )
        }
        return (
            <div>
                {authRedirect}
                <button onClick={this.registerPage}>Register here</button>
                <button onClick={this.signInPage}>Sign In</button>
                <form onSubmit={this.formSubmitHandler}>
                    {formData}
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, name) => dispatch(auth(email, password, isSignup, name)),
        // onPostingUserData: (name, userId) => dispatch(postUserDataToTheServer(name, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);