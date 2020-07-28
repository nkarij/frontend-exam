import React, { Component } from 'react';
import VideoSlide from './VideoSlide'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import styled from 'styled-components';

export default class Slider extends Component {

  state= {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    currentIndex: 0,
  }

  componentDidMount = () => {
    this.setState({currentIndex : 0})
    this.showSlides(0)
  }

  
  goToPrevSlide = (e) => {
    // console.log("prev")
    e.preventDefault();
    if(this.state.currentIndex - 1 < 0) {
      this.showSlides(this.state.images.length - 1)
      return this.setState({
        currentIndex: this.state.images.length - 1,
      })
      
    } else {
          // console.log("Prev");
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
      
      this.showSlides(this.state.currentIndex - 1)
      // console.log(this.state.currentIndex - 1);
    }


  }
  
  goToNextSlide = (e) => {
    // console.log("next")
    e.preventDefault();
    if(this.state.currentIndex + 1 > this.state.images.length - 1 ) {
      this.showSlides(0)
      return this.setState({
        currentIndex: 0,
      })
    } else {
          // // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))

      this.showSlides(this.state.currentIndex + 1)
      // console.log(this.state.currentIndex + 1);
    }
  }

  // currentSlide = (index) => {
  //   console.log("radio")
  //   var slides = document.querySelectorAll(".slide img");
  //   console.log(slides);
  //   // var dots = document.querySelectorAll(".slider-dot");
  //   // console.log(dots)
  //   for (var i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (var i = 0; i < dots.length; i++) {
  //       dots[i].checked = false;
  //       // dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   var slide = slides[index];
  //   // console.log(slide);
  //   slide.style.display = "block";
  //   dots[index].checked = true;
  // }
  
// der er noget galt med min logik, når jeg bruger radiobuttons.
// det kan sikkert fixes med arrows.
  showSlides = (index) => {
    var i;
    var slides = document.querySelectorAll(".video-slide");
    // var newIndex = this.state.currentIndex;
    
    if (index > slides.length) {this.state.currentIndex = 0 }
    if (index < 0 ) {this.state.currentIndex = slides.length -1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    var slide = slides[index];
    // console.log(slide);
    slide.style.display = "block";
  }

  render() {
    return (
        <div className="video-slider-section">

          <div className="video-slider"> 
            {
              this.state.images.map((image, i) => (
                <VideoSlide key={i} image={image} />
              ))
            }
        </div>
        <div className="video-slider-dots">
            <BackArrow className="video-slider__backArrow"
              onClick={this.goToPrevSlide}>
              <FaArrowAltCircleLeft 
              />
            </BackArrow>
            <NextArrow className="video-slider__nextArrow"
            onClick={this.goToNextSlide}
            >
              <FaArrowAltCircleRight 
              />
            </NextArrow>
          </div>
      </div>
    )
  }
}

const BackArrow = styled(IoMdArrowDropleft)`
    font-size: 3rem;
    ${'' /* padding: .25rem; */}
    fill: white;
    cursor: pointer;
    border: 2px solid white;
`

const NextArrow = styled(IoMdArrowDropright)`
    font-size: 3rem;
    ${'' /* padding: .25rem; */}
    fill: white;
    cursor: pointer;
    z-index: 2;
    border: 2px solid white;
`