import React, { useState } from "react";
import apiClient from "../../lib/ApiClient";


const NewList = ({boardId}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const handleNewListClick = () => {
    setFormVisible(true);
  };
  const handleSaveNewListClick = (e) => {
    e.stopPropagation();
    // setFormVisible(false);
    if (newListTitle.length > 1) {
      apiClient.createList(boardId, newListTitle).then((d) => console.log(d))
    } else {
      alert("List title is empty")
    }
    
  };
  const handleXOutNewListClick = (e) => {
    e.stopPropagation();
    setFormVisible(false);
  };

  const handleNewTitleChange = (e) => {
    setNewListTitle(e.target.value);
  }

  /* when we click save:
   if title length is greater than 1
     - make a post to api/lists (send title and boaardId)
     - clear the form (component state)
     - set formVisible to false
     - update STORE state
   else
     - let the user know to title is empty
*/
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