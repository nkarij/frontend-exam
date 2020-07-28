import React, { Component } from 'react';
import fetchAsset from '../../API/fetchAsset'
import { viewPortWidth } from '../../API/viewport'
import BlogPostSummary from '../BlogPosts/BlogPostSummary'
import { Link } from 'react-router-dom';

export default class BlogGallery extends Component {

  state= {
    blogArray : [],
    isLoading: true,
  }

  componentDidMount = () => {
     
    fetch('http://localhost:4000/blog-posts')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
      // console.log(json)
        let sortedArray = json.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })

        this.setState({
          blogArray : sortedArray,
          isLoading : false,
        })
    });  

  }

  render() {
    if(this.state.isLoading === false && this.state.blogArray != []){
        return (
          <ul className="blog-gallery-section"> 
            {
              this.state.blogArray && this.state.blogArray.map(dataset => (
                  <Link to={'/details/' + dataset.id} key={dataset.id}>
                      <BlogPostSummary truncate  data={dataset} />
                  </Link>
              ))
            }
          </ul>
      )
    } else { return null }
    
  }
}
