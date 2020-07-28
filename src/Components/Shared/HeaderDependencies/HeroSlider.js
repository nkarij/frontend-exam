import React, { Component } from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderSub from './HeaderSub'
import { viewPortWidth } from '../../../API/viewport'

export default class HeroSlider extends Component {

    state = {
        imageArray : [],
        isLoading : true,
        currentIndex : 0,
        slideShow: null,
    }

    componentDidMount = async () => {

        let viewPortWidth = document.documentElement.clientWidth;
        // console.log(this.props.data);
        console.log(this.props.data)
        if(this.props.data){
            let imageAssets = [];

            fetch('http://localhost:4000/assets/' + this.props.data[0].id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                imageAssets.push(data.url)
                fetch('http://localhost:4000/assets/' + this.props.data[1].id)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    console.log(json)
                    imageAssets.push(json.url)

                    this.setState({
                        imageArray : imageAssets,
                        isLoading : false,
                    })
                    
                    // if(viewPortWidth > 450){
                        this.slideShow();
                    // }
                });
            });
        }        
    }

    componentWillUnmount = () => {
        this.clearSlideShow();
    }

    slideShowTimer = () => {
        if(viewPortWidth > 700) {
            this.state.slideShow = setTimeout(this.slideShow, 4000); // Change image every 3 seconds
        }
    }

    clearSlideShow = () => {
        clearTimeout(this.state.slideShow);
    }

    slideShow = () => {
        let index = this.state.currentIndex;
        // console.log("state index", index)
        var slides = document.querySelectorAll(".hero-image-wrapper");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
        index++;
        // console.log("index inc", index);
        if (index > 1 ) { index = 0 }
        this.setState(prevState => ({
            currentIndex: index,
        }))
        var slide = slides[index];
        // console.log(slide);
        slide.style.display = "block";
        this.slideShowTimer()
      }

    render() {
        
        if(this.state.isLoading === false && this.state.imageArray != []) {
            // console.log(this.state.imageArray)
            return (
                <div className="hero-slider">
                        {this.state.imageArray && this.state.imageArray.map((url, i) => (
                            <div key={i} className="hero-image-wrapper">
                                <img className="hero-image" src={url} alt="" ></img>
                            </div>
                        ))}
                        <HeaderLogo source={"/assets/icon/Logo.svg"} />
                        <HeaderSub />
                </div>
            )
        } else { return null }

    }
}
