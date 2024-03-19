import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <ul className="list">
      {visibleContacts().map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
      {/* {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))} */}
    </ul>
  );
};

export default ContactList;
