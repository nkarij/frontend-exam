import React, { Component } from 'react';
import { connect } from 'react-redux'
import validateContactForm from '../../Scripts/JS/validateContact'
import validateComment from '../../Scripts/JS/validateComment'
import SectionHeading from '../GenericComponents/Titles/SectionHeading'
// import { signInAction } from '../../store/auth/AuthAction'

class SignInForm extends Component {
    state = {
        comments : {
            name: '',
            email: '',
            comment: '',
            blogpost_id: this.props.id,
        },
        message : {
            name: '',
            email: '',
            website: '',
            message: '',
        }
    };

    handleInputChange = (e) => {
        // console.log(this.state)
        if(this.props.contactus){
            this.setState({
                message : {
                    ...this.state.message,
                    [e.target.name]: e.target.value,
                }
            });
            // console.log(this.state);
        } else {
            this.setState({
                comments : {
                    ...this.state.comments,
                    [e.target.name]: e.target.value,
                }
            });
        }
        // validate here, if time.
    };

    validateForm(e){
        e.preventDefault()
        let data;
        
        if(this.props.contactus){
            data = this.state.message;
            let validation = validateContactForm(data);
            if(validation === true ) {
                this.handleSubmitForm()
            }else {
                console.log("error validating the contactform");
            }
        } else {
            data = this.state.comments;
            let validation = validateComment(data);
            if(validation === true ) {
                this.handleSubmitForm()
            } else {
                console.log("error validating the commentform")
            }
        }
        // console.log(data);
    };

    handleSubmitForm = () => {
        // e.preventDefault();
        // console.log("contact",this.props.contactus)
        let url;
        let body;
        if(this.props.contactus){
            url = 'http://localhost:4000/messages'
            body = this.state.message;
        } else {
            const id = this.state.blogpost_id;
            url = `http://localhost:4000/blog-posts/${id}/comments`;
            body = this.state.comments;
        }
        // console.log(url)
        // console.log("body", body);

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }).then((response) => {
            // console.log(response.status);
            return response.json();
        })
        .then((response) => {
            // console.log("response", response);
            document.querySelector(".comment-form__button").style.backgroundColor = "#00a86b";
            window.location.reload(false);
        }).catch(error => console.log(error))
    };

    render() {

        return (
            <div className="comment-form-section">
                <form id="comment-form" onSubmit={
                    // (e) => this.handleSubmitForm(e)
                    (e) => this.validateForm(e)
                    }>
                    {/* <h5 className="comment-form__heading">LEAVE A COMMENT</h5> */}
                    <SectionHeading className="comment-form__heading" white={"LEAVE A COMMENT"} />
                    <div className="comment-form__input-container">
                        {/* <label className="comment-form__label"  htmlFor="name">Your Name:</label> */}
                        <input placeholder="Your Name" className="comment-form__input" type="text" name="name" id="name" onChange={this.handleInputChange} />
                        <p className="nameinput__error"></p> 
                    </div>
                    <div className="comment-form__input-container">
                        {/* <label className="comment-form__label" htmlFor="email">Your Email:</label> */}
                        <input placeholder="Your Email" className="comment-form__input" type="text" name="email" id="email" onChange={this.handleInputChange} />
                        <p className="emailinput__error"></p> 
                    </div>
                    {
                        this.props.contactus ? 
                        <div>
                            <div className="comment-form__input-container">
                                {/* <label className="comment-form__label"  htmlFor="website">Your Website:</label> */}
                                <input placeholder="Your Website" className="comment-form__input" type="text" name="website" id="website" onChange={this.handleInputChange} />
                                <p className="websiteinput__error"></p> 
                            </div> 
                            <div className="comment-form__input-container">
                                {/* <label className="comment-form__label"  htmlFor="message">Your Comment:</label> */}
                                <textarea placeholder="Your Comment" className="comment-form__input" name="message" id="message" onChange={this.handleInputChange}></textarea>
                                <p className="messageinput__error"></p> 
                            </div>
                        </div> : null
                    }

                    {
                        this.props.commentform ?
                        <div className="comment-form__input-container">
                            {/* <label className="comment-form__label"  htmlFor="comment">Your Comment:</label> */}
                            <textarea placeholder="Your Comment" className="comment-form__input" name="comment" id="comment" onChange={this.handleInputChange}></textarea>
                            <p className="contentinput__error"></p> 
                        </div> : null
                    }

                    <div className="comment-form__input-container">
                        <button className="comment-form__button" type="submit"> SUBMIT </button>
                    </div>
                    {/* <div className="auth-error">
                        { authError ? <p> Error Component, textprop={authError} </p> : null}
                    </div> */}
                </form>
            </div>
        )
    }
}


export default connect()(SignInForm);
