import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBoard } from "../../features/boards/boards";

const Board = () => {
  const boardId = useParams().id;
  const dispatch = useDispatch()
  useSelector((state) => state.boards)
  useEffect(()=>{
    dispatch(fetchBoard(boardId))

  },[dispatch, boardId])
  return (
    <p>hi from board</p>
  )
}

export default Board