import { useState, useEffect } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"



export default function AnimeData () {
    const [animes, setAnimes] = useState([])	
    const [search, SetSearch] = useState('')

useEffect(() => {
	const url = 'https://api.jikan.moe/v4/anime'
    const getAnimes = async() => {
		const response = await axios.get(url)
        console.log(response.data)
		
    setAnimes(response.data.data)
		
}
	getAnimes()
   
}, [])	
console.log(animes)

let navigate = useNavigate()
const showAnime = (anime) => {
  navigate(`${anime.data}`)
}



if (animes && animes[0]) {
    return (
        <div>
            {
        animes.map((anime, index) => (
        <div className="anime-container" onClick={() => showAnime(anime)} key={anime.index} >
        <img src={anime.images.jpg.image_url} alt={anime.titles} />
            <h3 style={{ fontFamily: 'Verdana', fontSize: '24px', color: 'aliceblue', textDecoration: 'underline', textDecorationColor: 'lime'}}>{anime.title}</h3>
            </div>
        ))
}

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
