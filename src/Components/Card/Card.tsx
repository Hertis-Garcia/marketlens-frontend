import React, { type JSX , type SyntheticEvent} from "react";
import "./Card.css";''
import type { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio";


interface Props {
  id : string;
  searchResult: CompanySearch;
  onPortFolioCreate: (e: SyntheticEvent) => void; 
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortFolioCreate,
}: Props): JSX.Element => {
  return (
    <div key={id} id={id} className="card">
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>${searchResult.currency}</p>
      </div>
      <div className="info">
        <p>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
      </div>
      <AddPortfolio onPortfolioCreate={onPortFolioCreate} symbol={searchResult.symbol} />
    </div>
  );
};

export default Card;
