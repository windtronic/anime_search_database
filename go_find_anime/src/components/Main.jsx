 import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'
 import { useState, useEffect } from "react"
 import AnimeData from './AnimeData'
 import AnimeCards from './AnimeCards'
 import axios from 'axios'
//  import { CHARACTER_URL } from '../globals'


export default function Main () {
  const [animes, setAnimes] = useState({})	
  const [search, setSearch] = useState({searchBar:'', formInput:'', isSubmitted:false})
 
   useEffect(() => {
	  const url = `https://api.jikan.moe/v4/anime?q=${search.searchBar}`

    console.log(url)
    const getAnimes = async() => {
		  const response = await axios.get(url)
        console.log(response.data)
        console.log(response.data)
        // console.log(response.data.links)
        // console.log(response.data.meta)
        // console.log(response.data.pagination)
		
    setAnimes(response.data.data)
}

getAnimes()
   
}, [search.isSubmitted])	


// let navigate = useNavigate()
// const showAnime = (mal_id) => {
//   navigate(`${mal_id}`) 
// }

const handleChange = (e) => {
  e.preventDefault()
  console.log(search)
  setSearch({...search,[e.target.id]: e.target.value, formInput:e.target.value, isSubmitted:false})
}

const handleSubmit = (e) => {
  e.preventDefault()
  setSearch({...search, formInput:'', isSubmitted: true})
  console.log(search)
}


  //  const page = `https://api.jikan.moe/v4/anime?q=`
  // const [useSearchParams] = useSearchParams()
 
 
    
   

    



 

 return (
  
      <div>
      <div className='search-box'>
      <input 
         type='text'  id='searchBar'
         placeholder='anime search.....' 
         value={search.formInput}
         onChange={handleChange} />
        
      <button type='button' onClick={handleSubmit}>Search</button>
      
      </div>
      <div className="anime-list">
			
			
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
