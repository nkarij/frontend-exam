import React from "react";

const BlogDetails = (props) => {
    // console.log(props)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateObject = new Date(props.time);
    let date = dateObject.toLocaleDateString("en-US", options);

    if(props.comments) {
        return(
            <div className="blog-bar-details-section">
                <span className="blog-bar-details">By: {props.author} / </span>
                <span className="blog-bar-details"> Comments: {props.comments.length} / </span>
                <span className="blog-bar-details"> { date } </span>
            </div>
        )
    } else {
        return(
            <div className="blog-bar-details-section">
                <span className="blog-bar-details">By: {props.author} / </span>
                <span className="blog-bar-details"> No comments / </span>
                <span className="blog-bar-details"> {date} </span>
            </div>
        )
    }
}

export default BlogDetails;