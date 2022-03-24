import { RegisterFieldsProps } from 'types/modules/AuthFields.template';
import { Input, Button, Form, Header } from 'components/elements';
import { FormikProps } from 'formik';
import { AuthFormValues } from 'types/templates/AuthForm.template';
import './LoginFields.scss';

type RegisterProps = RegisterFieldsProps & FormikProps<AuthFormValues>;

function RegisterFields({ ...formik }: RegisterProps) {
  return (
    <Form className={'register__form'}>
      <div>
        <Header>Log in</Header>
        <Input name='email' />
        <Input name='password' />
        <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default RegisterFields;
