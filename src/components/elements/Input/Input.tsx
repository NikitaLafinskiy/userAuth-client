import { Field } from 'formik';
import { Error } from 'components/elements';
import { InputProps } from 'types/elements/Input.template';
import './Input.scss';

function Input({ name, className, style, ...rest }: InputProps) {
  const classes = className
    ? `elements__input ${className}`
    : 'elements__input';
  return (
    <div className={classes}>
      <label htmlFor={`elements__input_${name}`}>{name}:</label>
      <Field
        style={style}
        id={`elements__input_${name}`}
        name={name}
        {...rest}
      />
      <Error name={name} />
    </div>
  );
}

export default Input;
