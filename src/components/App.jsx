import React, { Component } from 'react';
import Form from './Form';

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
        <Form onSubmit={this.formSubmitHandler} />
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
