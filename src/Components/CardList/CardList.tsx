import React, { type JSX, type SyntheticEvent } from 'react'
import Card from '../Card/Card'
import './CardList.css'
import type { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid';


interface Props {
  searchResults: CompanySearch[];
  onPortFolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortFolioCreate }: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              key={result.symbol}
              id={result.symbol}
              searchResult={result}
              onPortFolioCreate={onPortFolioCreate}
            />
          );
        })
      ) : (
        <h2>No Results Found</h2>
      )}
    </>
  );
};


export default CardList
