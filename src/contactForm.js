import React, { Component } from "react";

class ContactForm extends Component {
    constructor(props){
        super(props)
        

        this.state = { value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        this.props.addNewUser(this.state.value); // i am grabbing the current state of the person object
        this.setState({value: ' '}); 
        event.preventDefault();
    }

    render(){
        return(
            <form >
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text"  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>E-mail:</label>
                    <input type="text"  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>Phone number:</label>
                    <input type="text"  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>Address:</label>
                    <input type="text"  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>City:</label>
                    <input type="text" onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>State:</label>
                    <input type="text"  onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <label>Zip Code:</label>
                    <input type="text" onChange={this.handleChange}/>
                    
                </div>
                <button type="button" onSubmit={this.handleSubmit } value={this.state.value} className="btn btn-success">Submit</button>
            </form>
        )
    }

}


export default ContactForm;