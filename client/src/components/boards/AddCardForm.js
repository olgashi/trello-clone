import React from "react";

const AddCardForm = () => {
  return (
    <div className="add-dropdown add-bottom active-card">
    <div className="card">
      <div className="card-info"></div>
      <textarea name="add-card"></textarea>
      <div className="members"></div>
    </div>
    <a className="button">Add</a>
    <i className="x-icon icon"></i>
    <div className="add-options">
      <span>...</span>
    </div>
  </div>
  )
}

export default AddCardForm;