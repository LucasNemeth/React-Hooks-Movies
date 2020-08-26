import React, { useState } from 'react';
import '../App.css';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInput =() => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInput();
    }

    return(
        <form className="search">
            <input type="text"
                value={searchValue}
                onChange={handleInputChanges}
            />
            <input type="submit" 
            onClick={callSearchFunction} 
            value="search"/>
        </form>
    )
}

export default Search;