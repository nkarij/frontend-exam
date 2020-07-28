import React, { Component } from 'react';
import TeamImage from './TeamImage';
import TeamBar from './TeamBar';
import fetchAsset from '../../API/fetchAsset';
import ReplyButton from './ReplyButton';

export default class Comment extends Component {

    state = {
        url : null,
        isLoading: true,
    }

    componentDidMount = async () => {
        if(this.props.commentCount){
            this.renderHeading()
        }
        if(this.props.data.asset){
            const id = this.props.data.asset;
            fetch('http://localhost:4000/assets/' + id)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                // console.log(json.url);

                this.setState({
                    url : json.url,
                    isLoading : false,
                })
            });   
        } else {
            this.setState({
                url : "/assets/content-img/testimonial_1.jpg",
                isLoading : false,
            })
        }
    }

    render() {
        const comment = this.props.data;
        // console.log(comment)

        if(this.state.isLoading === false && this.state.url != null) {
            // console.log(this.state.url)
            return (
                <div className="comment">
                    <TeamImage src={this.state.url}/>
                    { this.props.blogpost ?  <TeamBar blogpost data={comment} /> :  <TeamBar data={comment} /> }
                    { this.props.blogpost ? <ReplyButton /> : null } 
                </div>
            )
        } else { return null }
    }
}


