import { Component } from "react";
import { InputPhonebook } from "./Phonebook/phonebook";
import { BookContacts } from "./Contacts/contacts";
import { GlobalStyled } from "./global.styled";
import contacts from './contacts.json'
import { FilterContacts } from "./Filter/filter";

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
    
  }

  changeFilter = newName => {
    console.log({newName})
  this.setState({filter: newName})
  }

  addContacts= addNewContacts => {
    this.setState({contacts: [...this.state.contacts, addNewContacts]})
    console.log(addNewContacts)
  }
 


  render(){
   const {filter, contacts} = this.state;
   console.log(this.state.contacts)
   const visible = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
   console.log(filter.name)
    return(
      <div className="wrapper-container">
  <InputPhonebook title="Phonebook" onSearchContacts={this.addContacts} changeFilter={this.changeFilter}/>
  <FilterContacts value={filter} onChange={this.changeFilter}/>
  <BookContacts title="Contacts" contacts={visible} searchFilterName={filter.name} changeFilter={this.changeFilter}/> 
  <GlobalStyled/>
      </div>
    )
  }
}
