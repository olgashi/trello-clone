import React, {useState} from "react";

const AddCardForm = () => {
  const [cardTitle, setCardTitle] = useState('')
  const handleOnChange = (e) => setCardTitle(e.target.value)
  return (
    <div className="add-dropdown add-bottom active-card">
    <div className="card">
      <div className="card-info"></div>
      <textarea name="add-card" onChange={handleOnChange}></textarea>
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