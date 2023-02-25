import { useState, useEffect } from "react"
import axios from 'axios'
import React from "react"

var app = express();



export default function Data () {


    //making a state to set data in
    // setting up a useEffect to control my components lifecycle
    //organize API links /url
    //Make the API call
    // set our data in state and log it
    // render our data

 	const [animeList, SetAnimeList] = useState({})	
	// const [search, setSearch] = useState([])


	

	
useEffect(() => {
	const url = 'https://api.jikan.moe/v4/anime/'
    
    
    const getAnimeList = async() => {
		const response = await axios.get(url)
		console.log(response.data)
        SetAnimeList(response.data)
		
}
	getAnimeList()

}, [])	

    return (
        <div>
            <h2> Data goes here </h2>
        </div>
    )
}