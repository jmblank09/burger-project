import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={classes.Input} />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className={classes.Input} />
          <input
            type="text"
            name="street"
            placeholder="Street"
            className={classes.Input} />
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            className={classes.Input} />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
