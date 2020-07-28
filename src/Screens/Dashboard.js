import React, { Component } from 'react';
import Header from '../Components/Shared/Header'
import NavBar from '../Components/Shared/Navbar'
import WelcomeGallery from '../Components/WelcomeGallery/WelcomeGallery';
import { Link } from 'react-router-dom';
import SectionHeadingMulti from '../Components/GenericComponents/Titles/SectionHeadingMulti'
import EventSlider from '../Components/EventGallery/EventSlider';
import ClubGallery from '../Components/ClubGallery/ClubGallery';
import SectionHeading from '../Components/GenericComponents/Titles/SectionHeading';
import MusicPlayer from '../Components/MusicPlayer/MusicPlayer';
import MusicSlider from '../Components/MusicPlayer/MusicSlider';
import VideoSlider from '../Components/VideoSlider/VideoSlider';
import TeamSlider from '../Components/TeamSlider/TeamSlider';
import BlogGallery from '../Components/BlogGallery/BlogGallery';
import SmallHeading from '../Components/GenericComponents/Titles/SmallHeading';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import NewsLetterSubheading  from '../Components/NewsLetter/NewsLetterSubheading';
import Footer from '../Components/Footer/Footer';
// SmallHeading

class Dashboard extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <NavBar />
                
                <div className="section-seperator welcome-gallery__intro">
                    <SectionHeadingMulti firstln={"WELCOME IN THE"}/>
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <WelcomeGallery />
                <div className="section-seperator">
                    <SectionHeading white={"EVENTS OF THE MONTH"} />
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <EventSlider />
                <div className="section-seperator">
                    <SectionHeading white={"NIGHT CLUB GALLERY"} />
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <ClubGallery frontpage={true} />
                <div className="section-seperator">
                    <SectionHeading white={"NIGHT CLUB TRACK"} />
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <div id="music-section">
                    <MusicPlayer />
                    <MusicSlider />
                </div>
                <div className="section-seperator">
                    <SectionHeading white={"LATEST VIDEOS"} />
                </div>
                <VideoSlider />
                <TeamSlider />
                <div className="section-seperator">
                    <SectionHeading white={"RECENT BLOGS"} />
                    <img src="/assets/bottom_line2.png" alt="" className="bottom-line"/>
                </div>
                <BlogGallery />
                <div className="section-seperator newsletter">
                    <SmallHeading title={"WANT THE LATES NIGHT CLUB NEWS"}/>
                    <NewsLetterSubheading white={"Subscribe to our newsletter and never miss a "} detail={" Event"}  />
                </div>
                <NewsLetter />
                <Footer />
            </div>
        )
    }
}

export default Dashboard;

