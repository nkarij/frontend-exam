import React, { Component } from 'react'
import NavBar from '../Components/Shared/Navbar'
import BlogPostList from '../Components/BlogPosts/BlogPostList';
import SectionHeading from '../Components/GenericComponents/Titles/SectionHeading';


export default class BlogPosts extends Component {
    
    render() {
        return (
            <div id="blogs-page-wrapper">
                <NavBar />
                <div className="section-seperator">
                    <SectionHeading white={"BLOG"} />
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <BlogPostList readmore />
            </div>
        )
    }
}
