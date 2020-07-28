import React, { Component } from 'react';
import CommentForm from '../Components/Comments/CommentForm'
import AddressInfo from '../Components/Contact/AddressInfo';
import SectionHeading from '../Components/GenericComponents/Titles/SectionHeading';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Footer/Footer';


export default class Contact extends Component {
    render() {
        return (
            <div id="contact-page-wrapper">
                <Navbar />
                <div className="contact-us-section">
                    <div className="section-seperator">
                        <SectionHeading white={"CONTACT US"} />
                        <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                    </div>
                    <div className="contact__flex-row">
                        <CommentForm contactus={true} />
                        <AddressInfo />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


// name
// Brian
// email
// be@rts.dk
// website
// www.brianemilius.com
// message
// Hej med dig!