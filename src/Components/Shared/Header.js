import React, { Component } from 'react'
import { HeaderLogo } from './HeaderDependencies/HeaderLogo';
// import HeaderImage from './HeaderDependencies/HeroImage';
import HeroSection from './HeaderDependencies/HeroSection'
import fetchAsset from '../../API/fetchAsset'
// import { HeaderLogo } from './HeaderDependencies/HeaderLogo';
import styled from 'styled-components';

class Header extends Component {

    state = {
        imageArray : [],
        slideSelection : [],
        isLoading : true,
    }

    componentDidMount = () => {

        fetch('http://localhost:4000/gallery-photos')
        .then((response) => {
            return response.json();
        })
        .then((json) => {

            let selectedArray = json.slice(10, 23)
            // if(selectedArray) {
                this.setState({
                    imageArray : selectedArray,
                    isLoading : false,
                })
            // }
        }); 
    }


    render() {
        if(this.state.isLoading === false & this.state.imageArray != []) {
            // console.log("test", this.state.imageArray[0]);
            return (
                <header className="header">
                    <HeroSection data={this.state.imageArray} />
                </header>   
            )  
        } else { 
            // console.log("fuck")    
            return null 
        }
    }
}

export default Header;

   {/* <NewImage source={image.url} /> */}