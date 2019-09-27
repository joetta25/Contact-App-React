import React, { Component } from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props)


        this.state = {
            name: " ",
            email: " ",
            number: " ",
            address: " ",
            city: " ",
            state: " ",
            zip: " "
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, key) {
        this.setState({ [key]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddUser(this.state); // i am grabbing the current state of the person object
        // this.setState({ value: ' ' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className='form-group'>
                    <label>
                        Name:
                    <input type="text" onChange={(e) => this.handleChange(e, 'name')} />
                    </label>

                </div>
                <div className='form-group'>
                    <label>
                        E-mail:
                        <input type="text" onChange={(e) => this.handleChange(e, 'email')} />
                    </label>

                </div>
                <div className='form-group'>
                    <label>
                        Phone number:
                        <input type="text" onChange={(e) => this.handleChange(e, 'number')} />
                    </label>

                </div>
                <div className='form-group'>
                    <label>
                        Address:
                        <input type="text" onChange={(e) => this.handleChange(e, 'address')} />
                    </label>

                </div>
                <div className='form-group'>
                    <label>
                        City:
                        <input type="text" onChange={(e) => this.handleChange(e, 'city')} />
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        State:
                        <input type="text" onChange={(e) => this.handleChange(e, 'state')} />
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        Zip Code:
                        <input type="text" onChange={(e) => this.handleChange(e, 'zip')} />
                    </label>

                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }

}


export default ContactForm;