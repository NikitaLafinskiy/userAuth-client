import { Form as FormikForm } from 'formik';
import { FormProps } from 'types/elements/Form.template';

function Form({ className, style, children }: FormProps) {
  const classes = className ? `elements__form ${className}` : 'elements__form';
  return (
    <FormikForm style={style} className={classes}>
      {children}
    </FormikForm>
  );
}

export default Form;
