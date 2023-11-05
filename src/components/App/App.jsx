import { render } from '@testing-library/react';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
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
  };

  addContact = contact => {
    //console.log(value);
    this.setState(preventState => {
      return {
        ...preventState,
        contacts: [...preventState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  render() {
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
        <ContactList list={this.state.contacts}></ContactList>
      </div>
    );
  }
}
