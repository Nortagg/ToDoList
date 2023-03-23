import { useState } from "react";
import "./toDoItem.styles.scss";
import {
  AiOutlineFileDone,
  AiOutlineCheckCircle,
  AiOutlineHighlight,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const ToDoItem = (props) => {
  const [checkButtonClassName, setCheckButtonClassName] = useState("check-✓");
  const [toDoTextDecoration, setToDoTextDecoration] = useState("toDoText");
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleColorChange = () => {
    if (checkButtonClassName === "check-✓")
      setCheckButtonClassName("checkGreen");
    else setCheckButtonClassName("check-✓");
  };

  const handleTextLine = () => {
    if (toDoTextDecoration === "toDoText")
      setToDoTextDecoration("toDoTextLine");
    else setToDoTextDecoration("toDoText");
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
    props.handleItemEdit(props.index, editedText);
  };
  const handleInputEditChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div className="toDoItem">
      {isEditing ? (
        <input
          className="Edit-input"
          placeholder="Change text here"
          type="text"
          value={editedText}
          onChange={handleInputEditChange}
        />
      ) : (
        <ul className="itemBorder">
          <li className={toDoTextDecoration}>{props.text}</li>
        </ul>
      )}
      {isEditing ? (
        <button className="Edit-Save" onClick={handleSaveClick}>
          <AiOutlineFileDone />
        </button>
      ) : (
        <button
          className={checkButtonClassName}
          onClick={() => {
            handleTextLine();
            handleColorChange();
          }}
        >
          <AiOutlineCheckCircle />
        </button>
      )}
      {isEditing ? null : (
        <button className="edit-Pencil" onClick={handleEditClick}>
          <AiOutlineHighlight />
        </button>
      )}
      <button
        className="delete-X"
        onClick={() => props.handleItemDelete(props.index)}
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export default ToDoItem;
