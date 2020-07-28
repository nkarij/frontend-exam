import React, { Component } from 'react';
import MusicSlide from './MusicSlide'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { viewPortWidth } from '../../API/viewport'

import styled from 'styled-components';

export default class Slider extends Component {

  state= {
    images: [
      "assets/content-img/track_thumb.jpg",
      "assets/content-img/track1.jpg",
      "assets/content-img/track2.jpg",
      "assets/content-img/track5.jpg",
      "assets/content-img/track4.jpg",
    ],
    currentIndex: 0,
  }

  componentDidMount = () => {
    this.setState({currentIndex : 0})
    this.showSlides(0)
  }

  playMusic = () => {
    let player = document.querySelector("#audio-player");
    if(player.src == ""){
      player.src = "/assets/media/YouBelongWithMe.mp3";
      player.play();
    } else if(player.src != "") {
      player.pause();
      player.removeAttribute('src');;
    }
  }
  
  goToPrevSlide = (e) => {
    // console.log(this.state.currentIndex);
    e.preventDefault();
    if(this.state.currentIndex < 0) {
      this.showSlides(this.images.length -1)
      return this.setState({
        currentIndex: this.state.images.length -1,
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));

    this.showSlides(this.state.currentIndex - 1)
    // console.log(this.state.currentIndex);
  }
  
  goToNextSlide = (e) => {
    // console.log(this.state.currentIndex);
    e.preventDefault();
    if(this.state.currentIndex >= this.state.images.length -1 ) {
      this.showSlides(0)
      return this.setState({
        currentIndex: 0,
      })
    } else {
        
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))

      this.showSlides(this.state.currentIndex + 1)
      // console.log(this.state.currentIndex + 1);

    }
  }

  
// der er noget galt med min logik, når jeg bruger radiobuttons.
// det kan sikkert fixes med arrows.
  showSlides = (index) => {
    // console.log(index)
    if(viewPortWidth < 700) {
      var i;
      // var newIndex = this.state.currentIndex;
       var slides = document.querySelectorAll(".music-slide img");
        if (index > slides.length) {this.state.currentIndex = 0 }
        if (index < 0 ) {this.state.currentIndex = slides.length -1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        var slide = slides[index];
        // console.log(slide);
        slide.style.display = "block";
      } else {
        var slides = document.querySelectorAll(".music-slide img");
        let overlays = document.querySelectorAll(".music-slide__overlay")
        // console.log(overlays)
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "block";
        }
        if (index > overlays.length) {this.state.currentIndex = 0 }
        if (index < 0 ) {this.state.currentIndex = overlays.length -1}
        for (var i = 0; i < overlays.length; i++) {
            overlays[i].style.display = "none";
        }
        var overlay = overlays[index];
        overlay.style.display = "block";
    }
  }

  render() {
    return (
        <div className="music-slider"> 
          {
            this.state.images.map((image, i) => (
              <MusicSlide playMusic={this.playMusic} key={i} image={image} />
            ))
          }
        <div className="music-backArrow">
          <BackArrow 
          onClick={this.goToPrevSlide}
          />
        </div>
        <div className="music-nextArrow">
          <NextArrow 
          onClick={this.goToNextSlide}
          />
        </div>
      </div>
    )
  }
}

const BackArrow = styled(IoMdArrowDropleft)`
    font-size: 3.5rem;
    ${'' /* padding: .25rem; */}
    fill: white;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    @media (min-width: 700px) {
      font-size: 2rem;
      left: 40px;
    }
    border: 2px solid white;
`

const NextArrow = styled(IoMdArrowDropright)`
    font-size: 3.5rem;
    ${'' /* padding: .25rem; */}
    fill: white;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    @media (min-width: 700px) {
      font-size: 2rem;
      right: 20px;
    }
    z-index: 3;
    border: 2px solid white;
`