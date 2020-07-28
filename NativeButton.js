import React, { Component } from 'react';

// import 
import styled from 'styled-components'
import { Colors } from '../../constants/Theme'


export const ListTabButton = props => (
	<ButtonContainer>
		<ButtonText>{props.title}</ButtonText>
    </ButtonContainer>
);

// NB IMPORTANT TO PASS THE BUTTON/CUSTOM COMPONENT. 
const ButtonContainer = styled.button`
    height: 40px;
    width: 100px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    /* background-color: ${props => props.background ? props.background : 'white'}; */
    /* background-color: ${props => props.primary ? '#fff' : 'white'}; */
    /* with deconstruction */
    /* background-color: ${({ color }) => color}; */
     /* background-color: ${({ primary }) => primary ? 'green' : 'white' } ; */
    background-color: ${props => props.active ? 'green' : 'white'};
`

const ButtonText = styled(Text)`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    margin: auto;
`
