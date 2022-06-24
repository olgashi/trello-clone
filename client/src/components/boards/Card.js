import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardId, cardLabels, cardTitle, cardDueDate, cardDescription, cardPosition, cardCommentsCount}) => {
  return (
    <div className="card-background">
    <Link to={`/cards/${cardId}`}>
      <div className="card">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          <div className="card-label green colorblindable"></div>
          <div className="card-label yellow colorblindable"></div>
          <div className="card-label red colorblindable"></div>
          <div className="card-label orange colorblindable"></div>
          <div className="card-label blue colorblindable"></div>
          <div className="card-label purple colorblindable"></div>
          <p>{cardTitle}
          </p>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon overdue-recent completed">
          </i>
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Card