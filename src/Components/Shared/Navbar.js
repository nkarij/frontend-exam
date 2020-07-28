import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hamburger from './NavDependencies/Hamburger';
import NavbarTitle from './NavDependencies/NavbarTitle'
import { NavLink, Link } from 'react-router-dom';


import styled from 'styled-components';
import TagLine from '../GenericComponents/Titles/TagLine';

class Navbar extends Component {

    componentDidMount() {

        let links = document.querySelectorAll(".shared-links__item");
        if(links){
            for (let index = 0; index < links.length; index++) {
                const link = links[index];
                link.classList.remove("link-active");
            }
        }
    }

    toggleMobileMenu = () => {
        let checkbox = document.querySelector("#hamburger-wrapper input");
        let navLinks = document.querySelector(".navbar__list");
        let nav = document.querySelector(".navbar");
        // console.log(navLinks)
        // console.log(navLinks)
        if(checkbox.checked === true) {
            navLinks.classList.add("navbar__list--active");
            nav.classList.add("navbar__open");

        } else if (checkbox.checked === false) {
            navLinks.classList.remove("navbar__list--active");
            // nav.classList.toggle("navbar__open");
            nav.classList.remove("navbar__open");
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__left-section">
                    <NavbarTitle />
                    <Hamburger toggleMenu={this.toggleMobileMenu} />
                </div>
                <ul className="navbar__list">
                    <NavLink 
                    className={"shared-links__item"} 
                    exact 
                    to={'/'} > HOME </NavLink>
                    <NavLink 
                    exact
                    className={"shared-links__item"} 
                    to={'/posts'} > BLOG </NavLink>
                    <NavLink 
                    exact
                    className={"shared-links__item"} 
                    to={'/icons'} > BOOK TABLE </NavLink>
                    <NavLink
                    exact 
                    className={"shared-links__item"} 
                    to={'/contact'} > CONTACT US </NavLink>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    // console.log(state);
    return {
        // prop: state.prop
    }
}

export default connect(mapStateToProps)(Navbar)


const Left = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0 20px;
    ${'' /* background-color: black; */}
};`

