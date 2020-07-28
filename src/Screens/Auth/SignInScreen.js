import React, { Component } from 'react'

// custom components
import SignInForm from '../../Components/Forms/SignInForm';


class SignInScreen extends Component {

    render() {
        return (
            <div className="sign-in-container">
                <SignInForm />
            </div>
        )
    }
}

export default SignInScreen

