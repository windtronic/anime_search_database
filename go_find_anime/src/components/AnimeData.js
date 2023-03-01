import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

export default function AnimeData({ animes }) {
  let navigate = useNavigate();
  const showAnime = (anime) => {
    navigate(`${anime}`);
  };

  // console.log(animes)

  if (animes && animes[0]) {
    return (
<div>
  <div className="anime-grid">
    {animes.map((anime) => (
      <div
        className="anime-container"
        onClick={(e) => showAnime(anime)}
        key={anime.title}
      >
        
      </div>
    ))}
    {animes.map((anime) => (
      <div>
        <img src={anime.images.jpg.image_url} alt="animes"></img>
        <h5></h5>
        < a href={anime.title}> {anime.title}</a>
      </div>
    ))}
  </div>
</div>

    );
  } else {
    return <h1> loading please wait </h1>;
  }
}

//making a state to set data in
// setting up a useEffect to control my components lifecycle
//organize API links /url
//Make the API call
// set our data in state and log it
// render our data
// Set up Guard Operator

// Returns for INSIDE of our IF ELSE
