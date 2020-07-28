import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../Constants/Theme'
import { FaCreativeCommonsRemix } from 'react-icons/fa';

const NewsLetterSubheading = (props) => {
    // console.log(props)
    return(
        <div className="newsletter-tagline">
            <span className="newsletter-tagline__heading"> {props.white}</span>
            <span className="newsletter-tagline__detail"> {props.detail} </span>
        </div>
    )
}

export default NewsLetterSubheading;

