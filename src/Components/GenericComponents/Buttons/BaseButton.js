import React, { Component } from 'react';

// styling:
import styled from 'styled-components'
import { Colors } from '../../Constants/Theme'


export const BaseButton = props => (
	<ButtonContainer>
		<ButtonText>{props.title}</ButtonText>
    </ButtonContainer>
);

// NB IMPORTANT TO PASS THE BUTTON/CUSTOM COMPONENT. 
const ButtonContainer = styled.button`
    height: 50px;
    width: 150px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    /* background-color: ${props => props.background ? props.background : 'white'}; */
    /* background-color: ${props => props.primary ? '#fff' : 'white'}; */
    background-color: ${props => props.active ? 'green' : 'white'};
`

const ButtonText = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: red;
    margin: auto;
`
