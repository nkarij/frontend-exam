import React, { Component } from 'react'
import ClubImage from './ClubImage'
import { viewPortWidth } from '../../API/viewport';
import Animate from 'animate.css-react';
import 'animate.css/animate.css'

export default class ClubGallery extends Component {

    state = {
        dataset: [
          ],
    }

    componentDidMount = () => {

        fetch('http://localhost:4000/gallery-photos')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // console.log("gallery", json);
            let slice = json.slice(0, 7)
            this.setState({dataset : slice});
            
        }).catch((error) => {
            // console.log(error)
        })

        if(this.props.frontpage === true ){
            window.addEventListener('scroll', () => {
                this.stickyMenu();
                this.startGallery();
            })
        }
    }

    componentWillUnmount = () => {
        // window.removeEventListener('scroll', () => {})
        window.removeEventListener('scroll', () => {
                
        })
    }

    stickyMenu = () => {
        // console.log("scrolling")
        let navbar = document.querySelector(".page-wrapper .navbar");
        if(navbar){
            let sticky = navbar.offsetTop;
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("navbar--sticky")
            } 
        }
    }

    startGallery = () => {
        let gallery = document.querySelector(".page-wrapper .club-gallery");
        if(gallery){
            let children = gallery.querySelectorAll(".club__image");
            let galleryPosition = gallery.offsetTop - window.innerHeight;
            if (window.pageYOffset >= galleryPosition) {
                gallery.classList.add("slide-in-left");
                children.forEach(child => {
                    child.classList.add("slide-in-left");
                })
            } 
        }
    }

    render() {
        return (
                <div className="club-gallery">
                    {
                        this.state.dataset.map((item, i) => (
                            <ClubImage key={i} asset={item.asset} />
                        ))
                    }
                </div>
        )
    }
}
