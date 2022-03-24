import { ErrorProps } from 'types/elements/Error.template';
import { ErrorMessage } from 'formik';
import './Error.scss';

function Error({ name, className }: ErrorProps) {
  const classes = className
    ? `elements__error ${className}`
    : 'elements__error';
  return (
    <ErrorMessage name={name}>
      {(err) => {
        return <div className={classes}>{err}</div>;
      }}
    </ErrorMessage>
  );
}

export default Error;
