import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { updateListTitle } from "../../features/lists";

const ListTitleInput = ({ title, listId }) => {
  const [currentTitle, setCurrentTitle] = useState(title)
  const changeHandler = (e) => setCurrentTitle(e.target.value)
  const dispatch = useDispatch();

  const submitNewTitle = () => {
    dispatch(updateListTitle({title: currentTitle, listId}));
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  return (
    <input 
      className="list-title"  
      value={currentTitle} 
      onChange={changeHandler} 
      onBlur={submitNewTitle}
      onKeyDown={handleEnterPress}
    />
  )
}

export default ListTitleInput;