import React, { type JSX } from 'react'
import Card from '../Card/Card'
import './CardList.css'


interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className ="card-list">
        <Card companyName ="Apple" ticker='AAPL' price={150.00} />
        <Card companyName ="Microsoft" ticker='MSFT' price={250.00} />
        <Card companyName ="Google" ticker='GOOGL' price={2800.00} />
    </div>
  )
}

export default CardList
