import React from "react";
import { useSelector } from "react-redux";
import NewList from "./NewList";
import List from "./List"

/*
- Lists component should have state to keep track of 
    listId for the list that we are adding card to
addingCardToList, setAddingCardToList

- On the List component

  - if that list's id === list id in addingCardToList
    add apropriate class to parent with className "list-wrapper"

  - when we click 'add card' on list
   addingCardToList gets updated with that list's id
   show 'add card form' (create a separate component for the form)

  - when we save 'add card form' set addingCardToList to null
*/

const Lists = ({boardId}) => {
  const currentLists = useSelector((state) => {
    return state.lists.filter((l) => l.boardId === boardId)
  })
  return (
    <div id="list-container" className="list-container">
    <div id="existing-lists" className="existing-lists">
      {currentLists.map((l) => {
        return (
          <List key={l._id} currentList={l} />
        )
      })}
    </div>
    <NewList boardId={boardId}/>
  </div>
  )
}

export default Lists;