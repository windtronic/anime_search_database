import { NavLink } from "react-router-dom"

export default function AnimeCard ({anime}) {
    
    console.log()
    return (
        <div className='anime-card'>
            <NavLink   key={`${anime.mal_id}-link`}
        to={`/anime/${anime.mal_id}` && `/anime/${anime.mal_id}`} >
         <figure>
          <img src={anime?.images?.jpg?.large_image_url} alt="" />
        </figure>
        <h3>{anime.title}</h3>
      </NavLink>
            
             

        </div>
    )
    
}
