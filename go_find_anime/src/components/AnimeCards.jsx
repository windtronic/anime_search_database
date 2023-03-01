import { Link, useNavigate} from 'react-router-dom'



export default function AnimeCards (props) {
  
	let navigate = useNavigate()
	const showAnimeCards = (anime) => {
	  navigate(`${anime}`)
	}	
 
  return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid'>
            {props.animes.map((anime) =>
            <div key={anime} className='card'
            onClick={() => showAnimeCards(anime)} >
            <h2>{anime.title}</h2>
			  <img src={anime.images.jpg.image_url} alt='animes'></img>
            </div>
            )}
        </div>
        
    </div>
    )
    
}
