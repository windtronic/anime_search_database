 import { Route, Routes} from 'react-router-dom'
 import React from "react"
 import Home from './Home'
 import Data from './Data'
 

export default function Main (props) {
    return (
       <div> 
        <div className='main-box'>
          <form className='search' />
            <input type='search'
            placeholder='anime search.....' />
        </div>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Data' element={<Data/>} />

        </Routes>

        </div>
    )
}