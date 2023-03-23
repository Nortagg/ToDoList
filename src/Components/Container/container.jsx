import "./container.styles.scss";
import { useState, useEffect } from "react";
import InputBar from "../Input/input";
import ToDoItem from "../ToDoItem/toDoItem";
import { AiOutlineSend, AiOutlineUndo } from "react-icons/ai";

const Container = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("items");
    const loadedItems = JSON.parse(temp);
    if (loadedItems) {
      setItems(loadedItems);
    }
  }, []);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (value.trim() === "") return;
    const newItems = [...items, value];
    setItems(newItems);
    setValue("");
    const temp = JSON.stringify(newItems);
    localStorage.setItem("items", temp);
  };
  const handleItemDelete = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
    const temp = JSON.stringify(updatedItems);
    localStorage.setItem("items", temp);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();
  };
  const handleRestart = () => {
    setItems([]);
  };
  const handleItemEdit = (id, newText) => {
    const updatedItems = [...items];
    updatedItems[id] = newText;
    setItems(updatedItems);
    const temp = JSON.stringify(updatedItems);
    localStorage.setItem("items", temp);
  };

  return (
    <div className="card">
      <h1 className="title">To Do List</h1>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <InputBar value={value} onChange={handleInputChange} />
          <button className="add">
            <AiOutlineSend />
          </button>
          <button type="button" className="restart" onClick={handleRestart}>
            <AiOutlineUndo />
          </button>
        </form>
        {items.map((text, index) => (
          <ToDoItem
            handleItemEdit={handleItemEdit}
            handleItemDelete={handleItemDelete}
            text={text}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
