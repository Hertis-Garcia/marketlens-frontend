import React from 'react'
import Card from '../Card/Card'
import './CardList.css'


interface Props {}

const CardList = () => {
  return (
    <div className ="card-list">
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardList
