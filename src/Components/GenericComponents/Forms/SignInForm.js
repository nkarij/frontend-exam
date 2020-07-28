import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signInAction } from '../../store/auth/AuthAction'


class SignInForm extends Component {
    state = {
        email: '',
        password: '',
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // console.log(e.target.name)
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    };

    render() {
        const { authError } = this.props;
        // console.log(authError);

        return (
            <form id="sign-in-form" onSubmit={this.handleSubmitForm}>
                <h5>Sign In</h5>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input className="sign-in__input" type="email" name="email" id="email" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input className="sign-in__input" type="password" name="password" id="password" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <button className="sign-in__button" type="submit"> Send </button>
                </div>

                <div className="auth-error">
                    { authError ? <p> Error Component, textprop={authError} </p> : null}
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // prop: anonymous function > dispathc(action(payload))
        signIn: (creds) => {
            dispatch(signInAction(creds))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
