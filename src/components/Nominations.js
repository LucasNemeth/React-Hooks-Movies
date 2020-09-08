import React from 'react';

const nomList =[]

const Nominations = (props) =>{
    console.log(props.setNominations)
    return(
        <ul>
            <p>can I display?</p>
            {nomList.map((props)=>(
                <li >{props.setNominations}</li>
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