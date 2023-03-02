export default function AnimeCards({ animes }) {

  return (
    <div>
      {/* <Link to='/'>Home</Link> */}
     <div className="anime-card">
      {animes.map((anime) => (
        <div key={anime.title}>
          <a href={anime.url}>
            {anime.title} 
            
          </a>
          <div className="info">
          <img src={anime.images.jpg.image_url} alt="animes"></img>
          <p> {anime.synopsis}</p>
          <p>Score: {anime.score} of 10</p>
          <p>{anime.source}</p>
          <p>{anime.rating}</p>
          <p>{anime.year}</p>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

