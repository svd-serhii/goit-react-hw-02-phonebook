import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <from>
          <div>
            <label htmlFor="">
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label htmlFor="">
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button>Add contact</button>
          </div>
        </from>
        <h2>Contacts</h2>
        <div>
          <label htmlFor="">
            <input type="text" />
          </label>
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default App;
