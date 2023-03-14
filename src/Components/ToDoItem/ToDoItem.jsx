import "./ToDoItem.styles.scss";
import { AiFillCheckSquare, AiOutlineClose } from "react-icons/ai";

const ToDoItem = (props) => {
  return (
    <div className="toDoItem">
      <p>{props.text}</p>
      <button className="check">
        {" "}
        <AiFillCheckSquare />{" "}
      </button>
      <button
        className="minus"
        onClick={() => props.handleItemDelete(props.index)}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ToDoItem;
