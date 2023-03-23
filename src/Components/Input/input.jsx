import "./input.styles.scss";
const InputBar = (props) => {
  return (
    <input
      className="input-look"
      type="text"
      placeholder="Type here"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputBar;
