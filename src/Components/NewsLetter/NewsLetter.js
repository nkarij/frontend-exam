import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsLetterForm from './NewsLetterForm'

class NewsLetter extends Component {

    state = {
        isLoading : true,
    }

    componentDidMount = () => {
        this.setState({
            isLoading : false,
        })
        
    }

    render() {
        const { email } = this.props;
        if(this.state.isLoading = false) {
            // console.log(email)
        }
        
        return (
            <section className="newsletter-section">
                <NewsLetterForm />
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("state newsletter", state)
    return {
        // from the redux state, but we dont really need that if we are using firebase:
        email: state.newsletter.email,
        // // from  firestore: name : state.firestore.data/ordered>collectionName
        emailsFS: state.firestore.ordered.NewsLetterList,
    }
}

export default connect(mapStateToProps)(NewsLetter)