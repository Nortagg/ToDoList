import "./input.styles.scss";
import { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [textList, setTextList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
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
    <div>
      <input
        type="text"
        placeholder="Type new activity here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="plus" onClick={handleButtonClick}>
        +
      </button>
      <div>
        {textList.map((text, index) => (
          <div className="toDoItem" key={index}>
            <p>{text}</p>
            <button className="minus" onClick={() => handleItemDelete(index)}>
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Input;
