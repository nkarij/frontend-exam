import React from 'react';
import BlogDetails from './BlogDetails'
import styled from 'styled-components';

const BlogBar = (props) => {

    let blog = props.data;
    // console.log(blog);
    
    if(blog) {
        if(props.truncate === true){
            return (
                <div className="blog-bar">
                    <div className="blog-bar__info">
                        <h4 className="blog-bar__title">{blog.title}</h4>
                        <BlogDetails 
                        author={blog.author}
                        comments={blog.comments}
                        time={blog.createdAt} 
                        />
                        <p className="blog-bar__text truncate--text">{blog.content}</p>
                    </div>
                </div>
            )
        } else {
                return (
                    <div className="blog-bar">
                        <div className="blog-bar__info">
                            <h4 className="blog-bar__title">{blog.title}</h4>
                            <BlogDetails 
                            author={blog.author}
                            comments={blog.comments}
                            time={blog.createdAt} 
                            />
                            <p className="blog-bar__text">{blog.content}</p>
                        </div>
                    </div>
                )
            }
    } else { return null }

}

export default BlogBar;


