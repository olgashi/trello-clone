import React from "react";
import { useSelector } from "react-redux";
import AddListForm from "./AddListForm";
import List from "./List"

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
    <AddListForm />
  </div>
  )
}

export default Lists;