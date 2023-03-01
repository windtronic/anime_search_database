 import { Route, Routes} from 'react-router-dom'
 import { useState, useEffect } from "react"
 import AnimeData from './AnimeData'
 import AnimeCards from './AnimeCards'
 import axios from 'axios'
 
export default function Main () {
  const [animes, setAnimes] = useState({})	
    const [search, setSearch] = useState('')

    useEffect(() => {
	const url = `https://api.jikan.moe/v4/anime`
    const getAnimes = async() => {
		const response = await axios.get(url)
        console.log(response.data)
        console.log(response.data.links)
        console.log(response.data.meta)
        console.log(response.data.pagination)
		
    setAnimes(response.data.data)

 
  }

getAnimes()
   
}, [])	
 

 const handleClick = (e) => {
    setSearch({...search,[e.target.value]: e.target.value})
   }
  
return (
  
      <div>
      <div className='search-box'>
        <div className='search'>
         <input 
         type='text'  
         placeholder='anime search.....' 
         onChange={(e) => setSearch(e.target.value)} />
        
      <button type='button' onClick={handleClick}>Search</button>
      
      </div>
      <div className="anime-list">
			
				</div>
			</div>

    <div className='route-container'>
      <Routes>
        <Route path='/' element={<AnimeData animes={animes}/>} />
        <Route path='/animecards' element={<AnimeCards animes={animes} />} />
      </Routes>
      </div>
</div>
    )
}
//route path the images to anime cards 