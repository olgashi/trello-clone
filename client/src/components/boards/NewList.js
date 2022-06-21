import React, { useState } from "react";


const NewList = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const handleNewListClick = () => {
    setFormVisible(true);
  };
  const handleSaveNewListClick = (e) => {
    e.stopPropagation();
    setFormVisible(false);
  };
  const handleXOutNewListClick = (e) => {
    e.stopPropagation();
    setFormVisible(false);
  };

  const handleNewTitleChange = (e) => {
    setNewListTitle(e.target.value);
  }

  return (
    <div id="new-list" className={`new-list ${formVisible ? "selected" : ""}`} onClick={handleNewListClick}>
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." onChange={handleNewTitleChange} value={newListTitle}/>
      <div>
        <input type="submit" className="button" value="Save" onClick={handleSaveNewListClick} />
        <i className="x-icon icon" onClick={handleXOutNewListClick}></i>
      </div>
    </div>
  )
}

export default NewList