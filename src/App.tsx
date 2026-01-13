import { useState } from 'react'

import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/SearchBar/Search'

function App() {
  
  return (
    <div className="App">
      <Search/>
      <CardList/>
      </div>
  )
}

export default App
