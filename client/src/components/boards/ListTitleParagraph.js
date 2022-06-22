import React from "react";

const ListTitleParagraph = ({ title, handleClick }) => {
  return (
    <p className="list-title" onClick={handleClick}>{title}</p>
  )
}

export default ListTitleParagraph;