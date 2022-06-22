import React, {useState} from "react";

const ListTitleInput = ({ title }) => {
  const [currentTitle, setCurrentTitle] = useState(title)
  const changeHandler = (e) => setCurrentTitle(e.target.value)
  return (
    <input className="list-title"  value={currentTitle} onChange={changeHandler}></input>
  )
}

export default ListTitleInput;