import { Formik, FormikHelpers, FormikProps } from 'formik';
import {
  AuthFormProps,
  AuthFormValues,
} from 'types/templates/AuthForm.template';
import { loginSchema, registerSchema } from 'validation/AuthForm.validation';
import { LoginFields, RegisterFields } from 'components/modules';
import { post } from 'utils/fetchers';
import { useNavigate } from 'react-router-dom';

function AuthForm({ isRegister, initialValues }: AuthFormProps) {
  const nav = useNavigate();

  const submitFunc = async (values: AuthFormValues) => {
    if (isRegister) {
      await post({
        url: 'api/register',
        data: values,
        withCredentials: false,
      });
      nav('/login');
    } else if (!isRegister) {
      await post({ url: 'api/login', withCredentials: true, data: values });
      nav('/getUser');
    }
  };

  const onSubmit = async (
    values: AuthFormValues,
    { setSubmitting }: FormikHelpers<AuthFormValues>
  ) => {
    console.log(values);
    const res = await submitFunc(values);
    console.log(res);
    setSubmitting(false);
  };

  const validationSchema = isRegister ? registerSchema : loginSchema;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(formik: FormikProps<AuthFormValues>) => {
        return (
          <>
            {isRegister ? (
              <RegisterFields {...formik} />
            ) : (
              <LoginFields {...formik} />
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default AuthForm;
