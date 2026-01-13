import React from "react";
import "./Card.css";

interface Props {};

const Card = () => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Card Image" />

      <div className="details">
        <h2>Card Title</h2>
        <p>Card description goes here.</p>
      </div>
      <div className="info">
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab impedit
          vitae illum hic cum, iure molestias, quam inventore saepe deleniti
          velit. Officiis commodi totam error, laboriosam repudiandae velit
          voluptas doloribus.
        </p>
      </div>
    </div>
  );
};

export default Card;
