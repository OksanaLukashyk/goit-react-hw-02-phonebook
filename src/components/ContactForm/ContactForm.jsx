import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
    
    };
    
    this.props.handleAddContactData(contactData);
    };

    handleInputChange = evt => {
    const value =
        evt.target.value;

    const name = evt.target.name;

    this.setState({
      [name]: value,
    });
    };
    
    render() {
        return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(([' \-][a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії ])?[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]*)*$"
            title="Only Cyrillic/Latin letters, also hyphen, apostrophe or space character can be used"
            required
          />
        </label>
        <label className={css.formLabel}>
            Number
          <input
            type="text"
            name="number"  
            onChange={this.handleInputChange}
            value={this.state.price}
            pattern="[+380]{4}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            title="Format +380-XX-XXX-XX-XX"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
    };
};