import React, { Component } from 'react';
import Nominations from './Nominations'
class AddToList extends Component {
    constructor(){
        super();
        this.state={
            movie:'',
            title:'',
            nomList:[]
        }
        
    }
    
    render(nominateMovie) {
        return (
            <button className="nominate" onClick={
                nominateMovie =()=>{
                alert("hi")
                this.state.push(Nominations);
            }}>Nominate</button>
        );
    }
}
export default AddToList;