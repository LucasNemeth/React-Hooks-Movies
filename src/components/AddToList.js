import React, { Component } from 'react';

class AddToList extends React.Component {
    state = {
        movies:[]
    }
    
    // constructor(props){
        // super(props);
        // this.state={
        //     movie:'',
        //     title:'',
        //     nomList:[]
            
        // }
        
        handleClick=(props) =>{
            const nomList = {
                title: this.props.Title,
                // key:this.movie.id
            // key: this.props.showId,
            }
            console.log(this.props.setNominations)
            // this.setState({ movies: [...this.state.movies, movies] }) 
            // if (this.props.movies === undefined) {
            //     this.props.movies = []
            //     this.props.movies.push(movieToAdd)
            //     // dbRef.set(this.props.currentListObj)
            // } else {
            //     this.props.movies.push(movieToAdd)
            //     // dbRef.set(this.props.currentListObj)
            // }
        }
    // }
    
    render() {
        let {movie, title} = this.props;
        console.log(movie,title)
        return (
                <button className="nominate" onClick={this.handleClick}>Nominate</button>
           
            

        );
    }
}
export default AddToList;