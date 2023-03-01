 import { Route, Routes} from 'react-router-dom'
 import React, { useState } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCards from './AnimeCards'
 
export default function Main (search, setSearch, handleChange) {
  
  
return (
  
      <div>
      <div className='search-box'>
        <div className='search'>
         <input 
         type='text'  
         placeholder='anime search.....' 
         onChange={handleChange} />
        
      <button type='button' onClick={() => setSearch(search)}>Search</button>
      
      </div>
      <div className="anime-list">
			
				</div>
			</div>


     
     
     
     <div className='route-container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/animedata' element={<AnimeData/>} />
        <Route path='/animecards' element={<AnimeCards/>} />
      </Routes>
      </div>
</div>
    )
}
//route path the images to anime cards 