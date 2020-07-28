import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme';
import { IoMdMenu } from "react-icons/io";

const Hamburger = (props) => {
    
    return (
        // <!-- label (icon) is hidden in web version -->
        <div id="hamburger-wrapper" onClick={props.toggleMenu}>
            <label htmlFor="foldout" >
                <IoMdMenu className="hamburger-icon" />
            </label>
            <input type="checkbox" name="foldout" id="foldout" />     
        </div>       
    )
}

export default Hamburger;


