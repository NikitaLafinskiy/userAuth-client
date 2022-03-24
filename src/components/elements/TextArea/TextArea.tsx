import { Field } from 'formik';
import { Error } from 'components/elements';
import { InputProps } from 'types/elements/Input.template';
import './TextArea.scss';
import 'components/elements/Input/Input.scss';

function TextArea({ name, className, style, ...rest }: InputProps) {
  const classes = className
    ? `elements__input elements__textArea ${className}`
    : 'elements__input elements__textArea';
  return (
    <div className={classes}>
      <label htmlFor={`textArea${name}`}>{name}</label>
      <Field
        style={style}
        as='textArea'
        id={`elements__textArea_${name}`}
        name={name}
        {...rest}
      />
      <Error name={name} />
    </div>
  );
}

export default TextArea;
