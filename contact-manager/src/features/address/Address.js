import React from 'react';
// import _ from 'lodash';

export default function Address(props) {
    const {
        street,
        street2,
        city,
        state,
        zip
    } = props.addressData;

    return (
        <a target="_blank"
            rel="noreferrer"
            href={buildAddressLinkURL(props.addressData)} 
            className="mailingAddress">

            <span className="ucfirst">
                {street}
            </span>
            <br />
            {renderStreet2Display(street2)}
            <span className="ucfirst">
                {buildCityStateZipDisplayStr(city, state, zip)}
            </span>
        </a>
    );
};

function renderStreet2Display(street2) {
    if(!street2 || !street2.length)
        return null;
    
    return (
        <React.Fragment>
            <span className="ucfirst">
                {street2}
            </span>
            <br />
        </React.Fragment>
    );
}

function buildCityStateZipDisplayStr(city, state, zip) {
    let returnStr = '';
    if(city && city.length)
        returnStr += city;
    
    if(state && state.length) {
        if(returnStr.length)
            returnStr += ', ';
        
        returnStr += state.toUpperCase() + '.';
    }

    if(zip && zip.length) {
        if(returnStr.length) returnStr += ' ';

        returnStr += zip;
    }

    return returnStr;
};

function buildAddressLinkURL(addressData) {
    const {
        street,
        street2,
        city,
        state,
        zip
    } = addressData;

    let linkUrl = 'http://maps.google.com/maps?q=';
    if(street && street.length)
        linkUrl += street + ', ';
    
    if(street2 && street2.length)
        linkUrl += street2 + ' ';
    
    if(city && city.length)
        linkUrl += city + ' ';

    if(state && state.length)
        linkUrl += state.toUpperCase() + '. ';
    
    if(zip && zip.length)
        linkUrl += zip;

    linkUrl = encodeURI(linkUrl);

    return linkUrl;
}
