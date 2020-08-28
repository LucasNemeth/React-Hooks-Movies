import React from 'react';

const nomList =[]

const Nominations = () =>{
    return(
        <ul>
            {nomList.map((movie)=>(
                <li key={movie.id}>{movie.name}</li>
            ))}
        </ul>
    )
}

export default Nominations