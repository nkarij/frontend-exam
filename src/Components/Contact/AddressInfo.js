import React from 'react';
import { MdLocationOn } from "react-icons/md";

const AddressInfo = (props) => {
    return(
        <div className="address-info-section">
            <div className="address-info__row">
                <div className="address__icon-wrap"></div>
                <MdLocationOn className="address__icon address__react-icon" />
                <div className="address__filler">
                    <p className="address-info__text"> 04, A Agroha Nagar Agra </p>
                    <p className="address-info__text"> Mumbai National Highway </p>
                    <p className="address-info__text"> Nr 3 </p>
                    <p className="address-info__text"> Dewas # 455555 India </p>
                </div>
            </div>
            <div className="address-info__row">
                <div className="address__icon-wrap"></div>
                <img className="address__icon" src="/assets/icon/Contact.svg" alt="" />
                <div className="address__filler">
                <p className="address-info__text"> +61 8 5346 2356 </p>
                </div>
            </div>
            <div className="address-info__row">
                <div className="address__icon-wrap"></div>
                <img className="address__icon" src="/assets/icon/Mail.svg" alt="" />
                <div className="address__filler">
                <p className="address-info__text"> @Hsoft.com</p>
                </div>
            </div>
            <div className="address-info__row">
                <div className="address__icon-wrap"></div>
                <img className="address__icon" src="/assets/icon/com.svg" alt="" />
                <div className="address__filler">
                <p className="address-info__text">www.Hsoft.com </p>
                </div>
            </div>
        </div>
        

    )
}

export default AddressInfo;