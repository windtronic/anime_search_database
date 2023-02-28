import { Link, useNavigate} from 'react-router-dom'
import React from 'react'


export default function AnimeCards ({anime}) {
  
	
 
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.images.jpg.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</article>
	)
    
}
