import React, { Component } from 'react';

import EventImage from './EventImage'
import EventOverlay from './EventOverlay'
// import EventImage from './EventImage'
import EventBar from './EventBar';
import { viewPortWidth } from '../../API/viewport'
import Dot from './EventDot';

import fetchAsset from '../../API/fetchAsset'


export default class WelcomeSlider extends Component {

  state = {
    dataset : [],
    currentIndex : 0
  }

  componentDidMount = () => {

      fetch('http://localhost:4000/events')
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          // console.log("event", json);
        this.setState({dataset : json });
        // denne kan evt sættes til 0
        this.showSlides(0)
      }).catch((error) => {console.log(error)})
  }

  currentSlide = (index) => {
    // console.log(index)
    var slides = document.querySelectorAll(".event-gallery");
    var dots = document.querySelectorAll(".event-slider-dot");
    // console.log(dots)
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].checked = false;
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if(viewPortWidth > 700 ) {
      let index2 = index +1;
      if (index2 > slides.length) {
        this.state.currentIndex = 0
        var slide2 = slides[this.state.currentIndex];
      } else if (index2 < 0 ) {
        this.state.currentIndex = slides.length -2
        var slide2 = slides[this.state.currentIndex];
      } else {
        var slide2 = slides[index2];
        slide2.style.display = "block";
      }
    }

      var slide = slides[index];
      // console.log(slide);
      slide.style.display = "block";
      dots[index].checked = true;
    
  }

  // er der noget galt med min logik, når jeg bruger radiobuttons.
// det kan sikkert fixes med arrows.
showSlides = (index) => {
    var i;
    var slides = document.querySelectorAll(".event-gallery");
    // console.log(slides);
    var newIndex = this.state.currentIndex;
    
    if(viewPortWidth > 700 ) {
      let index2 = newIndex +1;
      if (index2 > slides.length) {
        this.state.currentIndex = 0
        var slide2 = slides[this.state.currentIndex];
      } else if (index2 < 0 ) {
        this.state.currentIndex = slides.length -2
        var slide2 = slides[this.state.currentIndex];
      } else {
        var slide2 = slides[index2];
        slide2.style.display = "block";
      }
    } else {

      if (index > slides.length) {this.state.currentIndex = 0 }
      if (index < 0 ) {this.state.currentIndex = slides.length -1}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      var slide = slides[newIndex];
      // console.log(slide);
      slide.style.display = "block"
    }

;
  }

  render() {
    return (
      <div id="event-slider-section">
        <div className="event-slider"> 
          {
            this.state.dataset.map((dataitem, i) => (
              <div key={i} className="event-gallery">
                <div className="event-gallery-flip-section">
                  <EventImage id={dataitem.asset}/>
                  <EventOverlay data={dataitem}/>
                </div>
                <EventBar key={i} data={dataitem} />
              </div>
            ))
          }
        </div>
        <div className="event-slider-dots">
            {
              this.state.dataset.map((item, i) => (
                <Dot key={i} 
                getCurrentSlide={ () => this.currentSlide(i) }  
                />
              ))
            }
          </div>
        
      </div>
    )
  }


}


{/* <div key={i} className="event-gallery">
<div className="event-gallery-flip-section">
      <EventImage src={image}/>
      <EventOverlay overlayOn={this.overlayOn} overlayOff={this.overlayOff}/>
  </div>
<EventBar />
</div> */}