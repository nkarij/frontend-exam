import React, { Component } from 'react';
import BlogImage from '../BlogGallery/BlogImage';
import BlogBar from '../BlogGallery/BlogBar';
import ReadMore from './ReadMore'

// remember a parentid.
class BlogPostSummary extends Component {

    state = {
        isLoading: true,
        asset: null,
        imgSrc : null,
    }

    componentDidMount() {
        if(this.state.asset != null) {
            const id = this.state.asset;
            fetch('http://localhost:4000/assets/' + id)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let asset = json;
                console.log(asset.url);
                this.setState({ 
                    imgSrc : asset.url,
                    isLoading : false
                })
            });
        }


    }

    render() {
        const  dataset  = this.props.data;
        this.state.asset = dataset.asset;

        
        if(this.state.isLoading === false && this.state.imgSrc != null) {
            // console.log(this.props.readmore)
            return(
                <li className="blog-gallery">
                    <div className="flex-row">
                        <BlogImage src={this.state.imgSrc}/>
                        { this.props.truncate ? <BlogBar data={dataset} truncate={true} /> : <BlogBar data={dataset} /> }
                    </div>
                    { this.props.readmore ? <ReadMore /> : null }
                </li>
            )
        } else {
            return null;
        }
        

    }
}

export default BlogPostSummary;

