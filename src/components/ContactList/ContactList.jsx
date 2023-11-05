export const ContactList = ({ list }) => {
  return (
    <ul>
      {list.map(contact => (
        <li key={contact.id} id={contact.id}>
          {contact.name}: {contact.number}
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};
