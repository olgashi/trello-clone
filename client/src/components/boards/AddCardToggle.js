import React from "react";

const AddCardToggle = ({ handleAddCardClick, _id}) => {
  return (
    <div 
    className="add-card-toggle" 
    data-position="bottom" 
    onClick={(_) => handleAddCardClick(_id)}>
    Add a card...
  </div>
  )
}

export default AddCardToggle