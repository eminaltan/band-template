import "./_buttons.scss";

const Button = (props) => {
  return (
    <button className={`buttons ${props.modifier}`}>{props.content}</button>
  );
};

export default Button;
