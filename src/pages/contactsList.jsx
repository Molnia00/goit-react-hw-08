import ContactList from "../components/contactList";
import ContactForm from "../components/form/contactForm";
import SearchBox from "../components/searchBox";

function ContactsListShown() {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
     <SearchBox />
      <ContactList/>
      
    </>
  );
}

export default ContactsListShown;