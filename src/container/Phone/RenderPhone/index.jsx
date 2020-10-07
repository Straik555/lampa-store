import React from "react";
import * as R from "ramda";

import {
    RenderPhoneBanner,
    RenderPhoneContainer,
    RenderPhoneTitle,
    RenderPhoneButton} from './style';

const RenderPhone = ({phone, onAddedToCart}) => {
    const shortDescription = `${R.take(60, phone.description)}...`

    return (
        <RenderPhoneBanner>
            <img src={phone.image} alt='' />
            <RenderPhoneContainer>
                <RenderPhoneTitle>
                    <h1>{phone.name}</h1>
                    <strong>${phone.price}</strong>
                </RenderPhoneTitle>
                <p>{shortDescription}</p>
            </RenderPhoneContainer>
            <RenderPhoneButton>
                <button
                    className='buy_now'
                    onClick={onAddedToCart}
                >
                    Buy now
                </button>
            </RenderPhoneButton>
        </RenderPhoneBanner>
    )
}

export default RenderPhone;