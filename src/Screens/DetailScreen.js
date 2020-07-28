import React, { Component } from 'react'
import ListDetail from '../Components/List/ListDetail';
import fetchAsset from '../API/fetchAsset'
import BlogPostSummary from '../Components/BlogPosts/BlogPostSummary';
import TestemonialGrid from '../Components/Comments/TestemonialGrid';
import CommentGrid from '../Components/Comments/CommentGrid';
import CommentForm from '../Components/Comments/CommentForm';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Shared/Navbar'
import SectionHeading from '../Components/GenericComponents/Titles/SectionHeading'

// this screen will load on route /list/:{id}
class DetailScreen extends Component {
    
    state = {
        dataset: null,
        isLoading: true,
    }

    componentDidMount() {
        // hente parameteret fra url
        const id = this.props.match.params.id;

        if(id != null || id != undefined) {
            fetch('http://localhost:4000/blog-posts/' + id)
            .then((response) => {
                return response.json();
            })
            .then( async (json) => {
                // let dataset = json.asset;
                // console.log(dataset)
                this.setState({ 
                    dataset : json,
                    isLoading : false
                })
            });
        }
        
    }

    render() {
        const id = this.props.match.params.id;
        // console.log(id);
        if( this.state.isLoading === false && this.state.dataset != null ){
            return(
                <div id="detail-screen-page">
                    <Navbar />
                    <div className="section-seperator">
                        <SectionHeading white={"BLOG POST"} />
                        <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                    </div>
                    <BlogPostSummary truncate={false} data={this.state.dataset} />
                    <TestemonialGrid blogpost blogid={id} />
                    <CommentGrid blogpost blogid={id} />
                    <CommentForm commentform={true} id={id}/>
                    <Footer />
                </div>
            )
        } else {
            return null;
        } 

    }
}


export default DetailScreen;
