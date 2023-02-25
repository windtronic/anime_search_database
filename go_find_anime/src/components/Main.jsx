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

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AnimeData' element={<AnimeData/>} />
        <Route path='/AnimeCard' element={<AnimeCard/>} />
        </Routes>

        </div>
    )
}