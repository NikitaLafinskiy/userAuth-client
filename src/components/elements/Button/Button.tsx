import { ButtonProps } from 'types/elements/Button.template';
import './Button.scss';

function Button({ children, style, className, ...rest }: ButtonProps) {
  const classes = className
    ? `elements__button ${className}`
    : 'elements__button';
  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
