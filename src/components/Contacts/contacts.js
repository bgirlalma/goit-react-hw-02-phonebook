
import {StyledItems, StyledTitle, Container, StyledUl } from './contacts.styled'
const { Component } = require("react")
export class BookContacts extends Component {
    render(){
        const {title, children, contacts} = this.props;
        return(
            <Container>
                <StyledTitle>{title}</StyledTitle>
                {children}
   
                <StyledUl>
                 {contacts.map(contact => (
                     <StyledItems key={contact.id}>{contact.name}: {contact.number};</StyledItems>
                 )
                 )}
                </StyledUl>
            </Container>
        )
    }
}