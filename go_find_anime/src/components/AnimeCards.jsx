import { Link, useNavigate} from 'react-router-dom'
import React from 'react'


export default function AnimeCards (props) {
  
	
 
	return (
		<article className="anime-card">
			<a 
				href={props.anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={props.anime.images.jpg.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ props.anime.title }</h3>
			</a>
		</article>
	)
    
}
