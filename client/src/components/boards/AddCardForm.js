import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../features/cards";

const AddCardForm = ({resetAddingCardToList, _id}) => {
  const [cardTitle, setCardTitle] = useState('');
  const dispatch = useDispatch();
  const handleOnChange = (e) => setCardTitle(e.target.value)
  const handleSubmitCard = () => {
    dispatch(createCard(
      {listId: _id,
      card: {
        title: cardTitle,
      }}
    ))
    resetAddingCardToList()
  }
  return (
    <div className="add-dropdown add-bottom active-card">
    <div className="card">
      <div className="card-info"></div>
      <textarea name="add-card" onChange={handleOnChange}></textarea>
      <div className="members"></div>
    </div>
    <a className="button" onClick={handleSubmitCard}>Add</a>
    <i className="x-icon icon" onClick={resetAddingCardToList}></i>
    <div className="add-options">
      <span>...</span>
    </div>
  </div>
  )
}

export default AddCardForm;