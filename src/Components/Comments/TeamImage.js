import React, { Component } from 'react'
import fetchAsset from '../../API/fetchAsset'

const TeamImage = (props) => {

    return(
        <div className="comment__image-wrapper" 
        >
            <img
            src={props.src} alt="" className="comment__image"/>
        </div>
    )
}

export default TeamImage;


