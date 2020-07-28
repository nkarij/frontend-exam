
import React, { Component } from 'react'

export default class ClubOverlay extends Component {

    render() {
        return (
            <div className="club__overlay" >
                <img src={this.props.src}></img>             
            </div>
        )
    }
}
