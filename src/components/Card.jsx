import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card mx-5 my-3" style={{ width: "10rem;" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="Football"
          style={{height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <div className="d-flex justify-content-between my-3">
            <small className="text-secondary fw-bold">Start: Feb 28</small>
            <small className="text-secondary fw-bold">End: Mar 01</small>
          </div>
          <div className="d-flex justify-content-between my-3">
            <small className="text-secondary fw-bold">Base Price: 100</small>
            <small className="text-secondary fw-bold">Current Bid: 100</small>
          </div>
          <button className="btn btn-success" style={{ width: "100%" }}>
            Bid
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
