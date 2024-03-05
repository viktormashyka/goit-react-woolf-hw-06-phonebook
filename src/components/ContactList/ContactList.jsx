import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'store/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
