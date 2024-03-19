import ContactForm from './ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
  return (
    <div
      style={{
        width: '600px',
        height: 'auto',
        border: '1px solid black',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
