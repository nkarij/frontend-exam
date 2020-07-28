import React, { Component } from 'react';

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        surname: ''
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        // console.log(e.target.name)
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // her skal email og password sendes til auth service
        // redux opdateres med userIsLoggedIn: false
    };

    render() {
        return (
            <form id="sign-up-form" onSubmit={this.handleSubmitForm}>
                <h5>Sign Up</h5>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input className="sign-up__input" type="name" name="name" id="name" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="surname">Surname:</label>
                    <input className="sign-up__input" type="surname" name="surname" id="surname" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input className="sign-up__input" type="email" name="email" id="email" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input className="sign-up__input" type="password" name="password" id="password" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <button className="sign-up__button" className="" type="submit"> Send </button>
                </div>
            </form>
        )
    }
}

export default SignUpForm;
