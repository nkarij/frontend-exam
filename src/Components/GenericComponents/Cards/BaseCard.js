import React from 'react';
import Icon from '../Graphics/Icon';
import { IoIosAddCircle } from 'react-icons/io';
import { Colors } from '../../../Constants/Theme'
import styled from 'styled-components';


const BaseCard = props => {
  return (
    <CardComp>
      {/* passing an entire component is possible...*/}
      <Icon icon={<IoIosAddCircle />} />
      <CardTitle >{props.title}</CardTitle>
      <p className="card-sub">{props.sub}</p>
    </CardComp>);
};

export default BaseCard;

const CardComp = styled.div`
  width: 100%;
  background-color: ${Colors.backgrounds.test};
  padding: 25px;
  min-height: 50;
  margin-bottom: 30;
  border-radius: 10;
  border-color: ${ Colors.backgrounds.primary };
  elevation: 20;
`;

export const CardTitle = styled.p`
  font-family: montserrat-bold;
  font-size: 20px;
  font-weight: bold;
`;
