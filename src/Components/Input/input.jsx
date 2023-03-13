import "./input.styles.scss";

// const Input = () => {
//   return <input type="text" placeholder="Add item" />;
// };
import { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [textList, setTextList] = useState([""]);

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
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>+</button>
      <div>
        {textList.map((text, index) => (
          <div key={index}>
            <p>{text}</p>
            <button onClick={() => handleItemDelete(index)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Input;
