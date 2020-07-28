import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import BlogPostSummary from './BlogPostSummary'
import PaginateButton from '../BlogPosts/PaginateButton';


class BlogPostList extends Component {
    
    state = {
        
        blogArray : [
            {id: 1, title: "TITLE", author: "admin", content: "text", asset: 4, createdAt : "2020-01-31T14:34:43.950Z", "updatedAt": "2020-01-31T14:34:43.950Z"},
            {id: 2, title: "TITLE", author: "admin", content: "text", asset: 5, createdAt : "2020-01-31T14:34:43.950Z", "updatedAt": "2020-01-31T14:34:43.950Z"},
            {id: 3, title: "TITLE", author: "admin", content: "text", asset: 4, createdAt : "2020-01-31T14:34:43.950Z", "updatedAt": "2020-01-31T14:34:43.950Z"},
            {id: 4, title: "TITLE", author: "admin", content: "text", asset: 5, createdAt : "2020-01-31T14:34:43.950Z", "updatedAt": "2020-01-31T14:34:43.950Z"}
        ],
        isLoading: true,
        currentArrayIndex : 0,
    }

    componentDidMount = () => {

        fetch('http://localhost:4000/blog-posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let sortedArray = json.sort((a,b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            })
            this.setState({
            blogArray : sortedArray,
            isLoading : false,
            })
        });  
    }

    pageActive = (e) => {
        let target = e.target;
        let paginateButtons = document.querySelectorAll(".paginate__button");
        for (let i = 0; i < paginateButtons.length; i++) {
            const button = paginateButtons[i];
            button.classList.remove("paginate__active");
        }
        target.classList.add("paginate__active");
    }

    renderPaginateButtons = () => {
        let Buttons = this.state.blogArray.length / 3;
        for (let index = 0; index < 3; index++) {
            return (
                <PaginateButton active={this.pageActive} page={index + 1} />                
            )
        }
    }

    render() {

        if(this.state.isLoading === false && this.state.blogArray != [] ) {
            // console.log(this.state.isLoading)
            return(
                <div className="blog-list-section">
                    <ul>
                        {this.state.blogArray && this.state.blogArray.map(dataset => (
                            <Link to={'/details/' + dataset.id} key={dataset.id}>
                                <BlogPostSummary readmore data={dataset} />
                            </Link>
                        ))}
                    </ul>
                    <div className="paginate-list">
                        { this.renderPaginateButtons() }
                     </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    // console.log("list state w firestore", state);
    return {
        // from redux state : reducerstate.rootreducerprop.reducerprop. not needed when using firebase
        // listItems: state.list.listemsitems,
        // from  firestore: name : state.firestore.data/ordered>collectionName
        // listItemsFS: state.firestore.ordered.List
    }
}



export default connect(mapStateToProps)(BlogPostList)



