import React, { Component } from "react";
import ContactForm from './contactForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: " ",
        email: " ",
        number: " ",
        address: " ",
        city: " ",
        state: " ",
        zip: " "  
    }
   }
   this.addNewUser = this.addNewUser.bind(this);
  }
   addNewUser(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: " Joetta ",
        email: "Joetta.chasidy@gmail.com",
        number: " 3235480823",
        address: "202 Williams Street",
        city: "Atlanta",
        state: "GA",
        zip: "30281"
      }
    }));
   }

  render(){
    return (
      <div> 
          <div className= 'form-sec' style={{width: '400px', background:"#ccc", padding:"15px", boxShadow:'0, 0, 4px #ccc'}}>
            <h4>Contact Form</h4>
             <ContactForm onAddUser={this.addNewUser}/>
          </div>
          <div>
             <h4>Contact List</h4>
             
          </div>
      </div>
    )
  }
}

export default App;
