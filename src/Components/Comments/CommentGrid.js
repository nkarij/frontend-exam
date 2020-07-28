import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentGrid extends Component {

    state = {
        comments : [],
    }

    componentDidMount = () => {
        //  get the id of the blogpost
        const id = this.props.blogid;
        // console.log(this.props)
        // console.log(id)
        // fetch comments
        fetch(`http://localhost:4000/blog-posts/${id}/comments`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // console.log(json);
            let totalComments = json.length + 3;
            // console.log("total", totalComments)
            // console.log(json)
            this.setState({
                comments : json,
                isLoading : false,
                commentCount : totalComments
            })
        }).catch((error) => {console.log(error)})
    }

    render() {
        // if there are any comments, loop them and print.

        if(this.state.isLoading === false && this.state.comments != [] ){
            return (
                <div className="comment-section">
                    {
                        this.state.comments && this.state.comments.map((dataset, i) => (
                            <div key={i} className="comment-wrapper">
                                 <Comment blogpost data={dataset}/>
                            </div>
                        ))
                    }
                </div>
            )
        } else { return null }
    }
}
