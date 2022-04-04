import React from 'react';

export default function MailTo(props) {
    const {
        email
    } = props;

    if(!email || !email.length)
        return (<span>No Email Address Found in MailTo</span>);

    return (
        <a href={'mailto:' + email}>
            {email}
        </a>
    );       
}