import { Component } from "react";
import { InputPhonebook } from "./Phonebook/phonebook";
import { BookContacts } from "./Contacts/contacts";
import { GlobalStyled } from "./global.styled";
import contacts from './contacts.json'

export class App extends Component {
  state = {
    contacts: contacts,
    filter: {
      name: '',
      number: '',
    }
    
  }

  changeFilter = newName => {
  this.setState(prevState => {
    return{
      filter: {
        ...prevState.filter,
        name: newName,
      }
    }
  })
  }

  addContacts= addNewContacts => {
    this.setState(prevState => {
     return {
      contacts: [...prevState.contacts, addNewContacts],
     }
    })
    console.log(addNewContacts)
  }
 

  render(){
   const {filter, contacts} = this.state;
   const visible = contacts.filter(contact => contact.name.toLowerCase().includes(filter.name.toLowerCase()));
   console.log(filter.name)
    return(
      <div className="wrapper-container">
  <InputPhonebook title="Phonebook" onSearchContacts={this.addContacts} changeFilter={this.changeFilter}/>
  <BookContacts title="Contacts" contacts={visible} searchFilterName={filter.name} changeFilter={this.changeFilter}/> 
  <GlobalStyled/>
      </div>
    )
  }
}
