import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineGoogle, } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
// FaFacebookF
// AiOutlineFacebook
// AiOutlineTwitter
// AiFillTwitterSquare
// AiOutlineInstagram
import styled from 'styled-components';

const SoMeMenu = (props) => {

    const data = props.urls;

    if(props.short === true){
        return (
            <SoMeList className="some-list">
                <a href={data.facebook} className="some-list__item">
                    <FaFacebookF className="facebook" />
                </a>
                <a href={data.twitter} className="some-list__item">
                    <AiOutlineTwitter className="twitter" />
                </a>
                <a className="some-list__item">
                    <AiOutlineGoogle className="google"/>
                </a>
            </SoMeList>
        )
    } else {
        return (
            <SoMeList className="some-list">
                <a className="some-list__item">
                    <FaFacebookF className="facebook" />
                </a>
                <a className="some-list__item">
                    <AiOutlineTwitter className="twitter" />
                </a>
                <a className="some-list__item">
                    <AiOutlineGoogle className="google"/>
                </a>
                <a className="some-list__item">
                    <AiOutlineTwitter className="twitter" />
                </a>
                <a className="some-list__item">
                    <AiOutlineGoogle className="google"/>
                </a>
            </SoMeList>
        )
    }

}

export default SoMeMenu

const SoMeList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: auto;
`



