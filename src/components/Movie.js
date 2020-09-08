import React from "react";
import AddToList from "./AddToList";

const placeholderImage = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// const sayHello =() =>{
//     alert("hi")
// }


const Movie= ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? placeholderImage : movie.Poster;


    return(
        <li className = "movie">
            <div>
                <img src={poster}
                    alt={`movie title: ${movie.Title}`}
                    width="150" />
            </div>
            <h3 className="movieTitle">{movie.Title}</h3>
            <p className="year">({movie.Year})</p>
            <AddToList />
        </li>

    )
};

export default Movie