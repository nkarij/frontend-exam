import React, { Component } from 'react'
import Icon from '../Graphics/Icon'
import { Colors, Fonts } from '../../../Constants/Theme'

export const Card = props => {
  return (
    <CardComp>
      <Icon icon={props.icon}/>
        <CardTitle>Card Title</CardTitle>
        <p className="card-sub">Card Sub</p>
    </CardComp>
  )
}

const CardComp = styled.div`
  width: 100%;
  background-color: ${Colors.backgrounds.test};
  padding: 25px;
  min-height: 50;
  margin-bottom: 30;
  border-radius: 10;
  border-color: ${ Colors.backgrounds.primary };
  elevation: 20;
`

export const CardTitle = styled.Text`
  padding-top: 20;
  padding-bottom: 20;
  font-family: montserrat-bold;
  font-size: 20;
  color: ${ };
  font-weight: bold;
`