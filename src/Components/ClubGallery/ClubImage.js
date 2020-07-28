import React, { Component } from 'react';
import ClubOverlay from './ClubOverlay'


export default class ClubImage extends Component {

    state = {
        asset : null,
        isLoading : true,
    }

    componentDidMount = () => {
        const id = this.props.asset
        fetch(`http://localhost:4000/assets/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // console.log("gallery", json.url);
            this.setState({
                asset : json,
                isLoading : false
            });
            // console.log(this.state)
        }).catch((error) => {
            console.log(error)
        })        
    }

    activateOverlay = (e) => {
        // e.preventDefault();
        // let target = e.target;
        // console.log("target", target)
        // let overlays = document.querySelectorAll(".club__overlay");
        // for (let index = 0; index < overlays.length; index++) {
        //     const overlay = overlays[index];
        //     overlay.classList.remove("club__overlay--active");            
        // }
        // let overlay = target.querySelector(".club__overlay")
        // // overlay.classList.add("club__overlay--active");
    }

    render() {
        if(this.state.isLoading === false && this.state.asset != null) {
            // console.log(this.state.asset)
            return (
                <div className="club__image-wrapper" onClick={(e) => this.activateOverlay(e)}>
                    <img id={"asset-" + this.state.asset.id} 
                    className="club__image" src={this.state.asset.url} alt="" ></img>
                    {/* <ClubOverlay src={this.state.asset.url} /> */}
                </div>
            )
        } else { return null }
    }
}

