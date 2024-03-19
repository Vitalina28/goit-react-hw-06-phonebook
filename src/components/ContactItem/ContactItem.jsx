import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li className={css.li}>
      {name}: {number}
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
