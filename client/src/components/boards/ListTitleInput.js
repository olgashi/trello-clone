import React from "react";

const ListTitleInput = ({ title }) => {
  return (
    <input className="list-title" placeholder={title} value={title}></input>
  )
}

export default ListTitleInput;