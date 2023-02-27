 import { Route, Routes} from 'react-router-dom'
 import React, { useState } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCard from './AnimeCard'
 
 

export default function Main () {

  const [value, setValue] = useState('')
  const handleClick = (event) => {
    event.preventDefault()
    const lowerCase = event.target.value.toLowerCase()
    setValue(lowerCase)
    console.log(value)

  }
    return (
      <div>
      <div className='search-box'>
          <input type='text' value={handleClick} 
            placeholder='anime search.....' />
            <button>submit</button>
      </div>
      



      <div className='route-container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/animedata' element={<AnimeData/>} />
        <Route path='/animecard' element={<AnimeCard/>} />
      </Routes>
      </div>
</div>
    )
}