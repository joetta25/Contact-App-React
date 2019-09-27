import React, { Component } from "react";
import ContactForm from './contactForm';
import './App.css';
import Contactlist from './contactList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.addNewUser = this.addNewUser.bind(this);
  }
  addNewUser(contact) {
    this.setState(prevState => ({
      ...prevState,
      contacts: [...this.state.contacts, contact]
    }));
  }

  render() {
    return (
      <div>
        <div className='form-sec' style={{ width: '400px', background: "#ccc", padding: "15px", boxShadow: '0, 0, 4px #ccc' }}>
          <h4>Contact Form</h4>
          <ContactForm onAddUser={this.addNewUser} />
        </div>
        <div>

          <h4>Contact List</h4>
          <Contactlist contacts={this.state.contacts} />
        </div>
      </div>
    )
  }
}

export default App;
