import React from 'react';

const BlogImage = (props) => {

    return(
        <div className="blog__image-wrapper" 
        >
            <img
            src={props.src} alt="" className="blog__image"/>
        </div>
    )
}

export default BlogImage;