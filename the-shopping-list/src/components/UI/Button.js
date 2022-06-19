import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type="submit"
      name={props.name && props.name}
      onClick={props.onClick && props.onClick}
      className={` ${classes["custom-button"]} ${props.cssButtonClasses}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
