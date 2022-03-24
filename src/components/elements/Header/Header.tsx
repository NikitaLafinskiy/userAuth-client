import { HeaderProps } from 'types/elements/Header.template';

function Header({ children, className, style, ...rest }: HeaderProps) {
  const classes = className
    ? `elements__header ${className}`
    : 'elements__header';
  return (
    <h1 className={classes} style={style} {...rest}>
      {children}
    </h1>
  );
}

export default Header;
