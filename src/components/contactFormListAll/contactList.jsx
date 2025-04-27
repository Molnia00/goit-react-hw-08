
import s from './contact.module.css'
import { useDispatch, useSelector } from "react-redux";

 import { useEffect } from 'react';
import { contSelect, selectLoading, selectRejected } from '../../redux/contacts/slice';
import { fetchContacts } from '../../redux/contacts/operations';
import Contact from './contacts';


function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const contacts = useSelector(contSelect);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectRejected);
  return (
    <div className={s.listOfContacts}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong, try again</h2>}
    </div>
  );
}




export default ContactList;