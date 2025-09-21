import MovieGrid from "./MovieGrid";
import { Link } from "react-router-dom";


export default function ResultsGrid({movies}) {
        if (!movies || movies.length == 0) {
            return <p>No Movies found...</p>
        }
    return (
        <div className="results-grid">
            {movies.map((movie) => (
                <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </Link>
            ))}

        </div>
    )
}