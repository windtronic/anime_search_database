 import { Route, Routes} from 'react-router-dom'
 import React from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCard from './AnimeCard'
 

export default function Main (props) {
    return (
       <div> 
        <div className='main-box'>
          <form className='search' />
            <input type='text'
            placeholder='anime search.....' />
        </div>
      <div className='route-box'>
      

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/animedata' element={<AnimeData/>} />
        <Route path='/animecard' element={<AnimeCard/>} />
        </Routes>
      </div>
        </div>
    )
}