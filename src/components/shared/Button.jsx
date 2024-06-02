const Button = ({
  onClick,
  buttonText,
  className,
  icon: Icon,
  iconClassName,
}) => {
  return (
    <div onClick={onClick} className={`py-[14px] px-6 ${className}`}>
      {buttonText} {Icon && <Icon className={`${iconClassName}`} />}
    </div>
  );
};

export default Button;
