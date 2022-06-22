import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { updateListTitle } from "../../features/lists";

const ListTitleInput = ({ title, listId }) => {
  const [currentTitle, setCurrentTitle] = useState(title)
  const changeHandler = (e) => setCurrentTitle(e.target.value)
  const dispatch = useDispatch();
  const sumbitNewTitle = () => {
    dispatch(updateListTitle({title: currentTitle, listId}));
  }

  return (
    <input 
      className="list-title"  
      value={currentTitle} 
      onChange={changeHandler} 
      onBlur={sumbitNewTitle}>

    </input>
  )
}

export default ListTitleInput;