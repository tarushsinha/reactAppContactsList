import React, { Component } from "react";
import "./contactList.css";
import Contact from "./contact.js";

class contactList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }
    addItem(e) {
        var contactArray = this.state.contacts;
 
        if (!this.fullName.value.match(/^([A-Z][a-z]+[\-\']?[A-Za-z]*) ([A-Z][a-z]+[\-\']?[A-Za-z]*)$/)){
            alert("Please use proper formatting when entering your name" + '\n' + "Formatting Example: John Doe");
        }
        else if(!this.email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
            alert("Please enter a valid email address");
        } 
        else if (!this.phoneNumber.value.match(/^[0-9]{3}[0-9]{3}[0-9]{4}$/)){
            alert("Please use proper formatting when entering your phone number" + '\n' + "Formatting Example: 1234567899");
        }
        else{    
          contactArray.unshift({
            text: ("Name: " + this.fullName.value + '\n' + 
            "Email: " +this.email.value + '\n' + "Phone: " + this.phoneNumber.value),
            key: Date.now()
          });
      
          this.setState({
            contacts: contactArray
          });
      
          this.fullName.value = "";
          this.email.value = "";
          this.phoneNumber.value = "";
        }
        
        e.preventDefault();
      }

      deleteContact(key) {
        var filteredContacts = this.state.contacts.filter(function(contact) {
          return (contact.key !== key);
        });
       
        this.setState({
          contacts: filteredContacts
        });
      }

    render() {
        return (
            <div className="contactListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.fullName = (a)} placeholder="Enter Full Name" required>
                        </input> 

                        <br /> <br />

                        <input ref={(a) => this.email = (a)} placeholder="Enter Email Address" required>
                        </input>

                        <br /> <br />

                        <input ref={(a) => this.phoneNumber = (a)} placeholder="Enter Phone Number" required>
                        </input>

                        <br /> <br />

                        <button type="submit">Add to Directory</button>
                    </form>
                </div>
                <Contact entries={this.state.contacts} delete={this.deleteContact}/>
            </div>
        )
    }
}

export default contactList;