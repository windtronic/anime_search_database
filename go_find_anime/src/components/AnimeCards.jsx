import { Link, useNavigate } from "react-router-dom";


export default function AnimeCards({ animes }) {
  let navigate = useNavigate();
  const showAnimeCards = (anime) => {
    navigate(`${anime}`);
  };

  return (
    <div>
      {/* <Link to='/'>Home</Link> */}

      {animes.map((anime) => (
        <div key={anime.title}>
          <a href={anime.url}>
            {anime.title} 
            
          </a>
          <img src={anime.images.jpg.image_url} alt="animes"></img>
          <p> {anime.synopsis}</p>
        </div>
      ))}
    </div>
  );
}

