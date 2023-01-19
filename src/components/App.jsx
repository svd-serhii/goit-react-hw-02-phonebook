import React, { Component } from 'react';
import ContactsForm from './ContactsForm';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm title={Phonebook} onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <div>
          <label>
            <input type="text" />
          </label>
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default App;
