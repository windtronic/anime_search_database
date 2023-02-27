 import { Route, Routes} from 'react-router-dom'
 import React, { useState } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCard from './AnimeCard'
 


export default function Main (props) {



  
    return (
      <div>
      <div className='search-box'>
          <input type='text'
            placeholder='anime search.....' 
            onChange={event => props.SetSearch(event.target.value)} />
            

            <button>submit</button>

      </div>
      
      <div className='anime-list'>
        {/* animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        )) */}
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