import React from 'react';

const nomList =[]

const Nominations = ({movie}) =>{
    
    return(
        <ul>
            {nomList.map((movie)=>(
                <li key={movie.id}>{movie.name}</li>
            ))}
        </ul>
    )
}

export default Nominations

// import React, { Component } from 'react';
// import './App.css';



// class Nominations extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             nomList:[],

//         }
//     }

//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
// }
// export default Nominations;