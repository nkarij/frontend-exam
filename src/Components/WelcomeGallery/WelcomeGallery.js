import React, { Component } from 'react'

import WelcomeOverlay from './WelcomeOverlay'
import WelcomeImage from './WelcomeImage'
import SectionHeadingMulti from '../GenericComponents/Titles/SectionHeadingMulti';
import { URL } from '../../Config/apiconfig'
import { viewPortWidth } from '../../API/viewport'
import fetchAsset from '../../API/fetchAsset'


export default class WelcomeGallery extends Component {
    
    state = {
        images: [
            {
                pic : "/assets/content-img/reastaurant_1.jpg",
                icon : "/assets/icon/Favicon.svg"
            },
            {
                pic : "/assets/content-img/thumb1.jpg",
                icon : "/assets/icon/Play_btn.svg"
            },
            {
                pic : "/assets/content-img/thumb2.jpg",
                icon : "/assets/icon/Mail.svg"
            }
            
        ]
    }

    componentDidMount = () => {
        // console.log(viewPortWidth);
        // let imageArray;

        // fetch('http://localhost:4000/gallery-photos')
        // .then((response) => {
        //     return response.json();
        // })
        // .then((json) => {
        //     console.log(json);
        //     let idArray;
        //     let data = json;
        //     if(viewPortWidth > 450){
        //         let array = data.slice(0, 3);
        //         idArray = array;
        //     } else {
        //         idArray = data;
        //     }
        //     // looper gennem id, pusher resultat til array
        //     idArray.forEach(async (image) => {
        //         let imgUrl = await fetchAsset(image.id);   
        //         imageArray.push(imgUrl);                                      
        //     });
        // }).catch((error) => {console.log(error)})

        // this.state.images = imageArray;
    }

    // assets/content-img/reastaurant_1.jpg
    overlayOn = () => {
        // console.log("mouseover")
        // document.querySelector(".welcome__overlay")
        // document.querySelector(".welcome__image-wrapper")
    }
      
    overlayOff = () => {
        // console.log("mouseleave");
        // document.querySelector(".welcome__overlay")
        // document.querySelector(".welcome__image-wrapper")
    }

    render() {
        return (

            <div id="welcome-gallery">
                {
                    this.state.images.map((image, i) => (
                        <div key={i} className="welcome-gallery-flip-section">
                            <WelcomeImage src={image.pic}/>
                            <WelcomeOverlay icon={image.icon} overlayOn={this.overlayOn} />
                        </div>
                    ))
                }
            </div>

        )
    }
}
