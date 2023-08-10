import { Component } from "react";
import { InputPhonebook } from "./Phonebook/phonebook";
import { BookContacts } from "./Contacts/contacts";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }


  render(){
    return(
      <div>
  <InputPhonebook/>
  <BookContacts title="Contacts"/> 
      </div>
    )
  }
}
