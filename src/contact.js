import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.createContact = this.createContact.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createContact(contact) {
    return <li onClick={() => this.delete(contact.key)} key={contact.key}>{contact.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createContact);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default Contact;