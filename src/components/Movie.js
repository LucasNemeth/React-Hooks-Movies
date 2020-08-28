import React from "react";

const placeholderImage = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// const sayHello =() =>{
//     alert("hi")
// }

const Movie= ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? placeholderImage : movie.Poster;

    function sayHello(){
        alert('Hello')
    }
    return(
        <div className = "movie">
            <div>
                <img src={poster}
                    alt={`movie title: ${movie.Title}`}
                    width="150" />
            </div>
            <h3>{movie.Title}</h3>
            <p>({movie.Year})</p>
            <button className="nominate" onClick={sayHello}>Nominate</button>
        </div>

    )
};

export default Movie