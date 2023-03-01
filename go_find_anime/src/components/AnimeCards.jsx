import { Link, useNavigate} from 'react-router-dom'



export default function AnimeCards ({animes}) {
  
	let navigate = useNavigate()
	const showAnimeCards = (anime) => {
	  navigate(`${anime}`)
	}	
 
  return (
        <div>
        <Link to='/'>Home</Link>
		{animes.map((anime) => (
      <div>
        <img src={anime.images.jpg.image_url} alt="animes"></img>
        <h5></h5>
        < a href={anime.title}> {anime.title}</a>
      </div>
    ))}
			
        </div>
        
    
    )
    
}
