import React, { Component } from 'react'

// custom components
import SignUpForm from '../../Components/Forms/SignUpForm';


class SignUpScreen extends Component {

    render() {
        return (
            <div className="sign-up-container">
                <SignUpForm />
            </div>
        )
    }
}

export default SignUpScreen

