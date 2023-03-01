import { Link, useNavigate} from 'react-router-dom'
import React from 'react'


export default function AnimeCards ({animes}) {
  
	let navigate = useNavigate()
	const showAnime = (animes) => {
	  navigate(`${animes}`)
	}	
 
	return (
		 <div className='anime-link' onClick={() => showAnime(animes)} key={animes.links} >
          
            <img src={animes.images.jpg.image_url} alt='animes'></img>
        </div>
		
		
	)
    
}
