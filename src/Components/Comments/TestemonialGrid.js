import React, { Component } from 'react'
import Comment from './Comment'
import SectionHeading from '../../Components/GenericComponents/Titles/SectionHeading'

export default class CommentGrid extends Component {

    state = {
        comments : [],
    }

    componentDidMount = () => {
        //  get the id of the blogpost
        const id = this.props.blogid;
        // console.log(id)
        // fetch testemonials
        fetch('http://localhost:4000/testemonials')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // console.log(json);
            this.setState({
                comments : json,
                isLoading : false,
            })
        }).catch((error) => {console.log(error)})
        let commentsCount = document.querySelectorAll(".comment");
        // console.log(commentsCount)
    }

    render() {
        // if there are any comments, loop them and print.

        if(this.state.isLoading === false ){
            return (
                <div className="comment-section">
                {this.props.blogpost ? <SectionHeading white={"3 Comments"} /> : null}
                    {
                        this.state.comments && this.state.comments.map((dataset, i) => (
                            <div key={i} className="testemonial-wrapper">
                                <Comment blogpost data={dataset}/>
                            </div>
                           
                        ))
                    }
                </div>
            )
        } else { return null }

    }
}
