import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../Constants/Theme'

const TrackHeading = (props) => {
    return(
        <Title className="sub-heading">{props.title}</Title>
    )
}

export default TrackHeading;

const Title = styled.h5`
    font-family: ${Fonts.fontFam.ubuntu};
    font-size: 20px;
    line-height: ${Fonts.lineHeight.medLineHeight};
    font-weight: 500;
    text-transform: uppercase;
    color: ${Fonts.colors.primaryColor};
    margin: 0;
    
`

