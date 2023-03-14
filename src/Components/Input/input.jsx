import "./input.styles.scss";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type new activity here"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
