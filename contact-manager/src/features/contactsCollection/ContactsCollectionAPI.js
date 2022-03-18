// A method to load the existing contacts
import config from '../../config';

// Import our contact data, this will be an ajax request later
import contacts from '../../data/contacts';

// Loads the contact data
export function fetchContacts() {
    return contacts;
};
