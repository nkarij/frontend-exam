import React from 'react';
import { Fonts } from '../../../Constants/Theme'
import styled from 'styled-components';

// HAVE A GOOD TIME
const LogoTagLine = (props) => {
    return(
        <Title className="logo__tag-line">{props.title}</Title>
    )
}

export default LogoTagLine;

const Title = styled.h4`
    font-family: ${Fonts.fontFam.ubuntu};
    line-height: ${ Fonts.lineHeight.heading };
    color: ${Fonts.colors.textColor};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 21px;
    letter-spacing: 22px;
    margin: 0;
`




















