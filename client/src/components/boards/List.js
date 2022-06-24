import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import ListTitleInput from "./ListTitleInput";
import ListTitleParagraph from "./ListTitleParagraph";
import AddCardForm from "./AddCardForm";
import AddCardToggle from "./AddCardToggle";


const List = (props) => {
  const { title, _id } = props.currentList;
  const { addingCardToList, handleAddCardClick, resetAddingCardToList } = props;

  const currentCards = useSelector(state => {
    return state.cards.filter(card => card.listId === _id);
  });
  const [editingTitle, setEditingTitle] = useState(false);
  const listTitleClick = () => setEditingTitle(true)

  return (
    <div className={`list-wrapper ${addingCardToList === _id ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {editingTitle ? <ListTitleInput title={title} listId={_id} /> : <ListTitleParagraph title={title} handleClick={listTitleClick} />}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-1-cards">
            {currentCards.length > 0 && currentCards.map(card => {
              return (
                <Card
                  key={card._id}
                  cardId={card._id}
                  cardTitle={card.title}
                  cardLabels={card.labels}
                  cardDueDate={card.dueDate}
                  cardDescription={card.description}
                  cardCommentsCount={card.commentsCount}
                  cardPosition={card.position} />
              )
            })}

          </div>
          {addingCardToList === _id ?
            <AddCardForm resetAddingCardToList={resetAddingCardToList} _id={_id}/> :
            <AddCardToggle handleAddCardClick={handleAddCardClick} _id={_id} />
          }

        </div>
      </div>
    </div>
  )
}

export default List;