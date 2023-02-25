import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import React from "react"






export default function AnimeData (props) {
 


    //making a state to set data in
    // setting up a useEffect to control my components lifecycle
    //organize API links /url
    //Make the API call
    // set our data in state and log it
    // render our data

 	const [animeList, setAnimeList] = useState([])	
	const [search, setSearch] = useState([])

useEffect(() => {
	const url = 'https://api.jikan.moe/v4/anime'
    
    
    const getAnimeList = async() => {
		const response = await axios.get(url)
		console.log(response.data)
        setAnimeList(response.data)
		
}
	getAnimeList()

}, [])	

useEffect(() => {
   const getSearch = async() => {
    const response = await axios.get(getSearch)
    console.log(response.data)
    setSearch(response.data)

}

    // getSearch()
}, [])

    return (
        <div>
        <div className='anime-grid' id='anime-list'>
            
        <button onClick={() => setAnimeList({...animeList})} />
            
            <img></img>
        </div>
            <h2></h2>
        </div>
    )
    
}
