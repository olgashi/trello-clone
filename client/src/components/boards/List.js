import React, { useState} from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import ListTitleInput from "./ListTitleInput";
import ListTitleParagraph from "./ListTitleParagraph";


const List = (props) => {
  const { title, _id } = props.currentList;
  const currentCards = useSelector(state => {
    return state.cards.filter(card => card.listId === _id);
  });
  const [editingTitle, setEditingTitle] = useState(false);
  const listTitleClick = () => setEditingTitle(true)

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
          {/* TODO see 1.1.1. List titles in ui docs 
          */}
          { editingTitle? <ListTitleInput title={title} listId={_id}/> : <ListTitleParagraph title={title} handleClick={listTitleClick}/>}
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
                  cardTitle={card.title} 
                  cardLabels={card.labels} 
                  cardDueDate={card.dueDate} 
                  cardDescription={card.description} 
                  cardCommentsCount={card.commentsCount} 
                  cardPosition={card.position} />
              )
            })}

          </div>
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;