import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Container, FormStyle, FieldStyle, SubmitStyled, LabelStaled} from './phonebook.styled'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

export const InputPhonebook = () => {
return (
    <Container>
          <Formik
    initialValues={{
      name: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {}}
  >

    <FormStyle>
      <LabelStaled htmlFor="name">Name
      <FieldStyle id="name" name="name" type="text"  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required placeholder="Jane" />
      </LabelStaled>
      <ErrorMessage name="name" component="div"/>
      
      <SubmitStyled type="submit">Add contact</SubmitStyled>
    </FormStyle>
  </Formik>
    </Container>
  
)
}