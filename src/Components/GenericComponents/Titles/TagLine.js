import React from 'react';
import { Fonts } from '../../../Constants/Theme'
import styled from 'styled-components';

// HAVE A GOOD TIME
const TagLine = (props) => {
    return(
        <Title className="logo__tag-line">{props.title}</Title>
    )
}

export default TagLine;

const Title = styled.h4`
    font-family: ${Fonts.fontFam.ubuntu};
    ${'' /* line-height: ${ Fonts.lineHeight.heading }; */}
    color: ${Fonts.colors.primary};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 21px;
    ${'' /* letter-spacing: 22px; */}
`




















