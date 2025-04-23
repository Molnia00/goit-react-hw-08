


import ContactList from '../../components/contactFormListAll/contactList';
import ContactForm from '../../components/contactFormListAll/form/contactForm';
import SearchBox from '../../components/contactFormListAll/searchBox';











function Contact() {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
     <SearchBox />
      <ContactList/>
      
    </>
  );
}

export default Contact;