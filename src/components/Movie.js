import React from "react";

const placeholderImage = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie= ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? placeholderImage : movie.Poster;
    return(
        <div className = "movie">
            <h2>{movie.Title}</h2>
            <div>
                <img src={poster}
                alt={`movie title: ${movie.Title}`}
                width="200"/>
            </div>
        </div>

    )
};

export default Movie