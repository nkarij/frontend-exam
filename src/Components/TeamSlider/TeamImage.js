import React, { Component } from 'react'

export default class TeamImage extends Component {

    state = {
        imageSrc : null,
        isLoading : true,
    }

    componentDidMount = () => {
        const id = this.props.id;
        // console.log("id", id)
        if(id) {
          fetch(`http://localhost:4000/assets/${id}`)
          .then((response) => {
              return response.json();
          }).then((json) => {
            //   console.log(json)
              this.setState({
                imageSrc : json.url,
                isLoading : false,
              })
            
          }).catch((error) => {console.log(error)})
        }
    }

    render() {
        if(this.state.isLoading === false && this.state.imageSrc != null) {
            return (
                <div className="team__image-wrapper" 
                >
                    <img
                    src={this.state.imageSrc} alt="" className="team__image"/>
                </div>
            )
        } else { return null }
    } 
}
