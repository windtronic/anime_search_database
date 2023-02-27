 import { Route, Routes} from 'react-router-dom'
 import React from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCard from './AnimeCard'
 import Search from './Search'
 

export default function Main () {
    return (
      
      <div className='route-box'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/animedata' element={<AnimeData/>} />
        <Route path='/animecard' element={<AnimeCard/>} />
        <Route path='/search' element={<Search/>} />
        </Routes>
      </div>

    )
}