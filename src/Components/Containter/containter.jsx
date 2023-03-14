import "./container.styles.scss";
import { useState } from "react";
import Input from "../Input/input";
import ToDoItem from "../ToDoItem/ToDoItem";
import { AiOutlineSend } from "react-icons/ai";

const Containter = () => {
  const [inputValue, setInputValue] = useState("");
  const [textList, setTextList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "") return;
    const newTextList = [...textList, inputValue];
    setTextList(newTextList);
    setInputValue("");
  };

  const handleItemDelete = (id) => {
    const temp = [...textList];
    temp.splice(id, 1);
    setTextList(temp);
  };

  return (
    <div className="Card">
      <h1 className="Title">To do list</h1>
      <div className="plusArrow">
        <Input value={inputValue} onChange={handleInputChange} />
        <button className="plus" onClick={handleButtonClick}>
          <AiOutlineSend />
        </button>
      </div>
      {textList.map((text, index) => (
        <ToDoItem
          handleItemDelete={handleItemDelete}
          text={text}
          index={index}
        />
      ))}
    </div>
  );
};

export default Containter;
