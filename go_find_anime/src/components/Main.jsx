 import { Route, Routes} from 'react-router-dom'
 import React, { useState } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCard from './AnimeCard'
 


export default function Main (props) {

  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
      <div>
      <div className='search-box'>
          <input type='text' value={search}
           onChange={handleChange}
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