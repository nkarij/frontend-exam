import React, { Component } from 'react'
import HeroSlider from './HeroSlider'

export default class HeroSection extends Component {

    state = {
        assets : [],
        isLoading : true,
    }

    componentDidMount = () => {
        let dataArray = this.props.data;
        // console.log("dataarray", dataArray)
        let randomNr1 = Math.floor(Math.random() * (dataArray.length - 1));
        let randomNr2 = Math.floor(Math.random() * (dataArray.length - 1));
        let imageArray = []
        imageArray.push(dataArray[randomNr1]);
        imageArray.push(dataArray[randomNr2]);
        // console.log("images", imageArray)
        // console.log(randomNr1);
        // console.log(randomNr2);
        this.setState({
            assets : imageArray,
            isLoading : false,
        })
    }


    render() {
        // console.log(this.props)
        if(this.state.isLoading === false && this.state.assets != []){
            return (
                <HeroSlider data={this.state.assets} />
            )
        } else { return null }
    }
}
