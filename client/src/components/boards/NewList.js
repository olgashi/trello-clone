import React, { useState } from "react";


const NewList = () => {
  const [formVisible, setFormVisible] = useState(false)
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

  return (
    <div id="new-list" className={`new-list ${formVisible ? "selected" : ""}`} onClick={handleNewListClick}>
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" onClick={handleSaveNewListClick} />
        <i className="x-icon icon" onClick={handleXOutNewListClick}></i>
      </div>
    </div>
  )
}

export default NewList