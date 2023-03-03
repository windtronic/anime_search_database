import { useNavigate } from "react-router-dom";


export default function AnimeData({ animes }) {
  let navigate = useNavigate();
  const showAnime = (anime) => {
    navigate(`${anime}`);
  };

  console.log(animes)

  if (animes && animes[0]) {
    return (
<div>
  <div className="anime-grid">
    {animes.map((anime) => (
      <div
        className="anime-container"
        onClick={(e) => showAnime(anime)}
        key={anime.title} >
        < a href={anime.url} target='_blank'> <img src={anime.images.jpg.large_image_url} alt=""></img></a>
        {anime.title}
      </div>
    ))}
   
  </div>
</div>

    );
  } else {
    return <h1> loading please wait </h1>;
  }
}


