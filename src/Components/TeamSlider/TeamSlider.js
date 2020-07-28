import React, { Component } from 'react';
import TeamDot from './TeamDot'
import TeamImage from './TeamImage'
import TeamBar from './TeamBar'
import fetchAsset from '../../API/fetchAsset'
import { viewPortWidth } from '../../API/viewport'

export default class TeamSlider extends Component {

  state= {
    dataset : [],
    currentIndex: 0,
    isLoading : true
  }

  componentDidMount = () => {

      fetch('http://localhost:4000/testemonials')
      .then((response) => {
          return response.json();
      })
      .then((json) => {
        console.log(json);

        this.setState({
          dataset : json,
          isLoading : false
        })
        // this.setState({currentIndex : 0, isLoading: false})
        // // denne kan evt sætte til 0
        this.showSlides(0)
      }).catch((error) => {console.log(error)})    

  }

  currentSlide = (index) => {
    // console.log(index)
    var slides = document.querySelectorAll(".team-gallery");
    var dots = document.querySelectorAll(".team-slider-dot");
    console.log(dots)
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].checked = false;
      dots[i].className = dots[i].className.replace(" active", "");
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
    var slides = document.querySelectorAll(".team-gallery");
    console.log(slides);
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
    if(this.state.isLoading === false ){
      return (
          <div className="team-slider"> 
            {
              this.state.dataset.map((data, i) => (
                <div key={i} className="team-gallery">
                  <TeamImage id={data.asset}/>
                  <TeamBar data={data} />
                </div>
              ))
            }
        
        {/* NB har lavet map' en om. */}
            <div className="team-slider-dots">
              {
                this.state.dataset.map((data, i) => (
                  <TeamDot key={i} getCurrentSlide={ () => this.currentSlide(i) }  />
                ))
              }
            </div>
        </div>
      )
    } else { return false }
    
  }
}

