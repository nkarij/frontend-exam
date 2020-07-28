import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// custom comp
import { createNewsletterEmail } from '../../../store/newsletter/newsletterAction';

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
        e.preventDefault();
        // passing the email to the dispatch
        this.props.addNewsletterEmail(this.state);
    };

    render() {
        // const emails = this.props.emails;
        const emailsFS = this.props.emailsFS;
        // console.log(emails);
        // console.log(emailsFS);
        return (
            <form id="newsletterin-form" onSubmit={this.handleSubmitForm}>
                <h5>Sign In</h5>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input className="newsletter__input" type="email" name="email" id="email" onChange={this.handleInputChange} />
                </div>
                <div className="input-container">
                    <button className="newsletter__button" className="" type="submit"> Send </button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("state w firestore", state)
    return {
        // from the redux state, but we dont need that if we are using firebase:
        // emails: state.newsletter.emailList,
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


    