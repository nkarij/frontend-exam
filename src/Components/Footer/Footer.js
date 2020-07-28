import React, { Component } from 'react'
import moduleName from '../GenericComponents/Titles/SectionHeading'
import SubHeading from '../GenericComponents/Titles/SubHeading';
import NavbarTitle from '../../Components/Shared/NavDependencies/NavbarTitle'


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-title">
                    <img className="footer-title__image" src="/assets/icon/Logo_main.svg"></img>
                </div>
                <address className="address">
                    <div className="footer-wrapper">
                        <SubHeading className={"footer__subheading"} title={"LOCATION"} />
                        <p className="footer__text"> PO BOX 16122 Collins Street West Victoria 8007 Australia</p>
                    </div>
                    <div className="footer-wrapper">
                        <SubHeading className={"footer__subheading"} title={"OPENING HOURS"} />
                        <p className="footer__text"> MON - FRI 9AM - 10PM </p>
                    </div>
                </address>
                <small className="small">Copyright &#9400; 2018 NightClub psd template all rights </small>
            </footer>
        )
    }
}
