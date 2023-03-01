import { Link, useNavigate} from 'react-router-dom'



export default function AnimeCards ({animes}) {
  
	let navigate = useNavigate()
	const showAnimeCards = (anime) => {
	  navigate(`${anime}`)
	}	
 
  return (
        <div>
        {/* <Link to='/'>Home</Link> */}
        
		{animes.map((anime) => (
      <div className='cards'>
         < a href={anime.url}> <img src={anime.images.jpg.image_url} alt="animes"></img></a>
         {anime.title} 
         
        
        
       
      </div>
    ))}
			
        </div>
        
    
    )
    
}
