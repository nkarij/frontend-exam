import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// custom comp
import { createNewsletterEmail } from '../../store/newsletter/newsletterAction';
import validateNewsletter from '../../Scripts/JS/validateEmail';

class NewsLetterForm extends Component {

    state = {
        email: '',
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        // console.log(e.target.name)
    };

    handleSubmitForm = (e) => {
        // e.preventDefault();
        // HERE post to api....
        // passing the email to the dispatch - to firestore
        this.props.addNewsletterEmail(this.state);
        document.querySelector(".newsletter__button").style.backgroundColor = "#00a86b";
        window.location.reload(false);
    };

    validateEmail = (e) => {
        e.preventDefault();
        // console.log(this.state)
        let validation = validateNewsletter(this.state);
        if(validation === true){
            this.handleSubmitForm();
        }
    }

    render() {
        // console.log(state)
        return (
            <form id="newsletter-form" onSubmit={
                // this.handleSubmitForm
                (e) => this.validateEmail(e)
                }>
                <div className="newsletter__input-container">
                    <label className="newsletter__label" htmlFor="email">Enter Your Email:</label>
                    <input className="newsletter__input" type="text" name="email" id="email" onChange={this.handleInputChange} />
                </div>
                <p className="emailinput__error"></p>
                <div className="newsletter__input-container">
                    <button className="newsletter__button" type="submit"> SUBSCRIBE </button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("state w firestore", state)
    return {
        // from the redux state, but we dont need that if we are using firebase:
        // email: state.newsletter.emailList,
        // from  firestore: name : state.firestore.data/ordered>collectionName
        emailsFS: state.firestore.ordered.NewsLetterList,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        // this prop can be accessed from the class, to pass data.
        addNewsletterEmail: (email) => { 
            // console.log("Busse")
            // the redux action, that handles the data.
            dispatch(createNewsletterEmail(email))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'NewsLetterList'}
    ])
)(NewsLetterForm)


    