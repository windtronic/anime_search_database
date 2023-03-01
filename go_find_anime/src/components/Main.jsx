 import { Route, Routes} from 'react-router-dom'
 import { useState, useEffect } from "react"
 import Home from './Home'
 import AnimeData from './AnimeData'
 import AnimeCards from './AnimeCards'
 import axios from 'axios'
 
export default function Main () {
  const [animes, setAnimes] = useState(null)	
    const [search, setSearch] = useState('')

    useEffect(() => {
	const url = `https://api.jikan.moe/v4/anime`
    const getAnimes = async() => {
		const response = await axios.get(url)
        // console.log(response.data)
        // console.log(response.data.links)
        // console.log(response.data.meta)
        // console.log(response.data.pagination)
		
    setAnimes(response.data.data)

 
  }

getAnimes()
   
}, [])	
console.log(animes)
 
const oneAnime = async() => {
  const get = await axios.get(`https://api.jikan.moe/v4/anime/?name=`)
  oneAnime(get.data.name)
 } 


   const handleChange = (e) => {
    setSearch({...search,[e.target.id]: e.target.value})
   }
  
return (
  
      <div>
      <div className='search-box'>
        <div className='search'>
         <input 
         type='text'  
         placeholder='anime search.....' 
         onChange={(e) => handleChange(e.target.value)} />
        
      <button type='button' onClick={(e) => setSearch(e.target.value)}>Search</button>
      
      </div>
      <div className="anime-list">
			
				</div>
			</div>


     
     
     
     <div className='route-container'>
      <Routes>
        <Route path='/' element={<AnimeData animes={animes}/>} />
       
        <Route path='/animecards' element={<AnimeCards/>} />
      </Routes>
      </div>
</div>
    )
}
//route path the images to anime cards 