import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      <h3 className="card__title">{props.title}</h3>
      <h5 className="card__desc">{props.desc}</h5>
      <span className="card__figures">
        <h4 className="card__figure">{props.figure}</h4>
        {props.change && (
        <h5
          className={`card__figure__change  card__figure__change--${props.modifier}`}
        >
          {props.change}
        </h5>
        )}
      </span>
    </div>
  );
};

export default Card;
