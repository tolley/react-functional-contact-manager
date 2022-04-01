import React from 'react';

export default function PhoneNumberLink(props) {
    const phoneNumber = props.phoneNumber;

    if(!phoneNumber || !phoneNumber.length)
        return null;

    return (
       <a href={'tel:' + phoneNumber}>
           {formatPhoneNumberForDisplay(phoneNumber)}
       </a>
    );
}

function formatPhoneNumberForDisplay(number) {
    if(!number || !number.length)
        return null;

    let returnNum = '';
    
    // If there's an area code
    let bAreaCode = false;
    if(number.length == 10) {
        bAreaCode = true;
        returnNum += '(' + number.substring(0, 3) + ') ';
    }

    let phoneNumBase = '';
    if(bAreaCode) {
        phoneNumBase = number.substring(3, number);
    } else {
        phoneNumBase = number;
    }
    
    returnNum += phoneNumBase.substring(0, 3)
                 + '-' 
                 + phoneNumBase.substring(3);

    return returnNum;
    
}