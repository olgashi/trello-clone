import React, { useState } from "react";


const NewList = () => {
  // TODO: change the className when element is clicked
  const [formVisible, setFormVisible] = useState(false)
  return (
    <div id="new-list" className="new-list" onClick={(e) => console.log('we clicked the element')}>
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  )
}

export default NewList