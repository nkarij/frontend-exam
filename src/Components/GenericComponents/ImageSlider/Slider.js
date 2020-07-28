import React, { Component } from 'react';
import Slide from './Slide'
import Dot from './Dot'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
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
    this.showSlides(this.state.currentIndex)
  }

  
  goToPrevSlide = (e) => {
    e.preventDefault();
    if(this.state.currentIndex < 0) {
      return this.setState({
        currentIndex: this.state.images.length -1,
      })
    }
    // console.log("Prev");
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));

    this.showSlides(this.state.currentIndex)
    // console.log(this.state.currentIndex);
  }
  
  goToNextSlide = (e) => {
    e.preventDefault();
    if(this.state.currentIndex > this.state.images.length -1 ) {
      return this.setState({
        currentIndex: 0,
      })
    }
    
    // // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))

    this.showSlides(this.state.currentIndex)
    // console.log(this.state.currentIndex);
  }

  currentSlide = (index) => {
    // console.log("radio")
    var slides = document.querySelectorAll(".slide img");
    // console.log(slides);
    var dots = document.querySelectorAll(".slider-dot");
    // console.log(dots)
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].checked = false;
        // dots[i].className = dots[i].className.replace(" active", "");
    }
    var slide = slides[index];
    // console.log(slide);
    slide.style.display = "block";
    dots[index].checked = true;
  }
  
// der er noget galt med min logik, når jeg bruger radiobuttons.
// det kan sikkert fixes med arrows.
  showSlides = (index) => {
    var i;
    var slides = document.querySelectorAll(".slide img");
    var newIndex = this.state.currentIndex;
    
    if (index > slides.length) {this.state.currentIndex = 0 }
    if (index < 0 ) {this.state.currentIndex = slides.length -1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    var slide = slides[newIndex];
    // console.log(slide);
    slide.style.display = "block";
  }

  render() {
    return (
        <div className="slider"> 
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        <div className="backArrow">
          <FaArrowAltCircleLeft 
          onClick={this.goToPrevSlide}
          />
        </div>
        <div className="nextArrow">
          <FaArrowAltCircleRight 
          onClick={this.goToNextSlide}
          />
        </div>

        <div className="slider-dots">
          {
            this.state.images.map((image, i) => (
              <Dot key={i} getCurrentSlide={ () => this.currentSlide(i) }  />
            ))
          }
        </div>

      </div>
    )
  }
}

const Arrow = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
`

const RightArrow = styled(Arrow)`
  right: 0;
  border-radius: 3px 0 0 3px;
`

const LeftArrow = styled(Arrow)`
  left: 0;
  border-radius: 3px 0 0 3px;
`