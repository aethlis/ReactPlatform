import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";
import HoverInfo from "../components/HoverInfo";


function CallingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    Home(movies, loading)
  )
}

function Home(movies, loading) {
  const [ID, setID] = useState("");
  const [COVERIMG, setCOVERIMG] = useState(null)
  const [HIDE, setHIDE] = useState(true)
  const [TITLE, setTITLE] = useState("")
  const [SUMMARY, setSUMMARY] = useState("")
  const [GENRES, setGENRES] = useState([])
  return (
    <div>
      {loading ? ( <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              mouseHover={() => {
                setID(movie.id)
                setCOVERIMG(movie.medium_cover_image)
                setTITLE(movie.title)
                setSUMMARY(movie.summary)
                setGENRES(movie.genres)
                setHIDE(false)
              }}
              ID={ID}
              COVERIMG={COVERIMG}
              TITLE={TITLE}
              SUMMARY={SUMMARY}
              GENRES={GENRES}

              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title} summary={movie.summary} 
              genres={movie.genres}
            />
          ))}
          <HoverInfo 
            ifHidden={HIDE}
            id={ID}
            coverImg={COVERIMG}
            title={TITLE}
            summary={SUMMARY}
            genres={GENRES}
          />
        </div>
      )}
    </div>
  );
};

export default CallingMovies;
