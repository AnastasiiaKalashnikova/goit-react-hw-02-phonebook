import { render } from '@testing-library/react';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    //console.log(value);
    this.setState(preventState => {
      return {
        contacts: [...preventState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  toFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter(contact => {
      const arr = contact.name.toLowerCase().includes(filter.toLowerCase());
      return arr;
    });

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.addContact}></AddForm>
        <h2>Contacts</h2>
        <Filter toFilter={this.toFilter}></Filter>
        <ContactList list={filteredContacts}></ContactList>
      </div>
    );
  }
}
