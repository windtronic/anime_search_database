 import { Route, Routes} from 'react-router-dom'
 import React, { useState } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCards from './AnimeCards'
 
export default function Main () {
  
  const [search, setSearch] = useState('')
  const onChange = (event) => {
    setSearch(event.target.value)

  const onSearch = (searchTerm) => {
    setSearch(searchTerm)
    console.log('search', searchTerm)
  }


  }
return (
  
      <div>
      <div className='search-box'>
        <form className='search'>
         <input type='text'   placeholder='anime search.....' 
           value={search}
           onChange={(event) => setSearch(event.target.value)} />
          <button type='button' onClick={() => setSearch(search)}>submit</button>
      </form>
      </div>
      <div className="anime-list">
			
				
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