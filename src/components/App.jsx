import { Component } from "react";
import { InputPhonebook } from "./Phonebook/phonebook";
import { BookContacts } from "./Contacts/contacts";
import { GlobalStyled } from "./global.styled";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    name: '',
    number: '',
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
    return(
      <div className="wrapper-container">
  <InputPhonebook onSearchContacts={this.addContacts}/>
  <BookContacts title="Contacts" contacts={this.state.contacts}/> 
  <GlobalStyled/>
      </div>
    )
  }
}
