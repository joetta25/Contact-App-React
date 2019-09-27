import React from 'react';

var ContactList = function (props, key) {
    console.log(props);
    var contactElements = props.contacts.map(contact =>
        <ul>
            <li>
                {contact.name}
            </li>
            <li> {contact.email}</li>
            <li>   {contact.number}</li>
            <li>   {contact.address}</li>
            <li>  {contact.city}</li>
            <li>  {contact.state}</li>
            <li>  {contact.zip}</li>
        </ul>




    )
    return (
        <div>

            {contactElements}
        </div>

    )
}

export default ContactList;