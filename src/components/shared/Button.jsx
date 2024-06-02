const Button = ({
  onClick,
  buttonText,
  className,
  icon: Icon,
  iconClassName,
}) => {
  return (
    <div
      onClick={onClick}
      className={`py-[14px] px-6 ${
        Icon ? "flex flex-row items-center gap-2" : ""
      } ${className}`}
    >
      {buttonText} {Icon && <Icon className={`${iconClassName}`} />}
    </div>
  );
};

export default Button;
