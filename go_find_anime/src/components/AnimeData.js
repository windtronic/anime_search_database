import { useState, useEffect } from "react"
import axios from 'axios'




export default function AnimeData () {
    const [anime, setAnime] = useState({})	
   

useEffect(() => {
	const url = 'https://api.jikan.moe/v4/anime'
   
    
    const getAnime = async() => {
		const response = await axios.get(url)
        console.log(response.data)
		console.log(response.data.data[0])
        // console.log(response.list)
        
       
        setAnime(response.data)
		
}
	getAnime()
   
}, [])	
console.log(anime)


// let navigate = useNavigate()
// const showAnimeList = (index) => {
//     navigate(`${index}`)
// }




return (
    <div>
    <h2></h2>
    </div>
    

       
       
    )
    
}

//making a state to set data in
    // setting up a useEffect to control my components lifecycle
    //organize API links /url
    //Make the API call
    // set our data in state and log it
    // render our data
