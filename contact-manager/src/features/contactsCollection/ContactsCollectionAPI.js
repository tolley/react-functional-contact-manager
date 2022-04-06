// Import our contact data, this will be an ajax request later
import contacts from '../../data/contacts.json';

// Mock ajax response, for use until I get a backend API up
const response = {
    data: contacts
};

// A method to return a promise that resolves with the contact
// data. This is until I get the backend API running and I can 
// use ajax.
export function fetchContacts() {
    console.log('Simulating ajax request, wait 2 seconds or edit ContactsCollectionAPI');
    return new Promise((resolve, reject) => {
        setTimeout((resolve) => {
            resolve(response);
        }, 2000, resolve);
    });
};
