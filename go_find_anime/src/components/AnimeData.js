import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function AnimeData (props) {
    const [animes, setAnimes] = useState([])	
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

  const handleChange = (e) => {
    e.preventDefault()
    oneAnime(search)
  }

 const oneAnime = async() => {
  const get = await axios.get(`https://api.jikan.moe/v4/anime/?name=`)
  oneAnime(get.data.name)
 } 
		
}

	getAnimes()
   
}, [search, setSearch])	
console.log(animes)

let navigate = useNavigate()
const showAnime = (anime) => {
  navigate(`${anime}`)
}



if (animes && animes[0]) {
    return (
        
        <div>
         <div className="anime-grid">
            {
        animes.map((anime) => (
          <div className="anime-container" onClick={() => showAnime(anime)} key={anime.objectID} >
            <a href={anime.url}> {anime.title}</a>
          <div className='anime-link' onClick={() => showAnime(anime)} key={anime.links} >
          </div>
            <img src={anime.images.jpg.image_url} alt='animes'></img>
        </div>
        ))
}
    </div>  
    </div>
    
  )
} else {
    return (
        <h1> loading please wait </h1>
    )
}




}

//making a state to set data in
    // setting up a useEffect to control my components lifecycle
    //organize API links /url
    //Make the API call
    // set our data in state and log it
    // render our data
    // Set up Guard Operator

    // Returns for INSIDE of our IF ELSE


      {/* <div className="grid">
        {searchResults.map((result, index) => (
          <div key={index} className="card" onClick={() => showDetails(index)}>
            <h3>Description: {result.data[0].description}</h3>
            <h3>Description_508: {result.data[0].description_508}</h3>
            <h3>Keywords: {result.data[0].keywords}</h3>
            <h3>Media Type: {result.data[0].media_type}</h3>
            <h3>NASA ID: {result.data[0].nasa_id}</h3>
            <h3>Secondary Creator: {result.data[0].secondary_creator}</h3>

            {result.links ? (
              <img src={result.links[0].href} alt="nasa" />
            ) : null}
          </div>
        ))}
      </div>   */}