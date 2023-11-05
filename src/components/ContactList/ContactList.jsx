import { Component } from 'react';

export const ContactList = ({ list }) => {
  console.log(list);
  return (
    <ul>
      {list.map(contact => (
        <li key={contact.id} id={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};
