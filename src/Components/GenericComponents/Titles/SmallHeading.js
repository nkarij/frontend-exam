import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../Constants/Theme'

const SmallHeading = (props) => {
    return(
        <h4 className="small-heading">{props.title}</h4>
    )
}

export default SmallHeading;

// const Title = styled.h5`
//     font-family: ${Fonts.fontFam.ubuntu};
//     font-size: ${Fonts.fontSize.subHeading};
//     line-height: ${Fonts.lineHeight.medLineHeight};
//     font-weight: 500;
//     text-transform: uppercase;
//     color: ${Fonts.colors.primaryColor};
//     margin: 0;
// `

