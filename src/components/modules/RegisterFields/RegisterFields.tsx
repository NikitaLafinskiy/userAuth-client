import { RegisterFieldsProps } from 'types/modules/AuthFields.template';
import { Input, Button, TextArea, Form, Header } from 'components/elements';
import { FormikProps } from 'formik';
import { AuthFormValues } from 'types/templates/AuthForm.template';
import './RegisterFields.scss';

type RegisterProps = RegisterFieldsProps & FormikProps<AuthFormValues>;

function RegisterFields({ ...formik }: RegisterProps) {
  return (
    <Form className={'register__form'}>
      <div>
        <Header>Sign up</Header>
        <Input name='username' />
        <Input name='email' />
        <Input name='password' />
        <TextArea name='about' />
        <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default RegisterFields;
