import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../Constants/Theme'

const SubHeading = (props) => {
    return(
        <Title className={props.className}>{props.title}</Title>
    )
}

export default SubHeading;

const Title = styled.h5`
    font-family: ${Fonts.fontFam.ubuntu};
    font-size: 20px;
    line-height: ${Fonts.lineHeight.medLineHeight};
    font-weight: 500;
    text-transform: uppercase;
    color: ${Fonts.colors.detailColor};
    margin: 0;
    
`

