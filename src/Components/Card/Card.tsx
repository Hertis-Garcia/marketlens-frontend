import React, { type JSX } from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
};

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Card Image" />

      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
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
