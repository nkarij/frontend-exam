import React, { Component } from 'react'
import { FaUtensils } from "react-icons/fa";

export default class Icons extends Component {
    render() {
        return (
            <div>
                <img src="/assets/icon/Contact.svg" width="450" height="40"></img>
                <img src="/assets/icon/com.svg" width="450" height="40"></img>
                <img src="/assets/icon/cursor.svg" width="450" height="40"></img>
                
                <img src="/assets/icon/Logo_main.svg" width="450" height="40"></img>
                <img src="/assets/icon/Logo.svg" width="450" height="40"></img>
                <img src="/assets/icon/Mail.svg" width="450" height="40"></img>
                <img src="/assets/icon/Map.svg" width="450" height="40"></img>
                <img src="/assets/icon/Play_btn.svg" width="450" height="40"></img>
                <img src="/assets/icon/Play.svg" width="450" height="40"></img>
            
                <div className="white-block">
                    <img src="/assets/icon/Favicon.svg" width="450" height="40"></img>
                    <img src="/assets/icon/table1.svg" width="450" height="40"></img>
                    <img src="/assets/icon/table2.svg" width="450" height="40"></img>
                    <img src="/assets/icon/table3.svg" width="450" height="40"></img>
                    <i class="fas fa-utensils"></i>
                    <FaUtensils />
                </div>
            </div>
        )
    }
}
