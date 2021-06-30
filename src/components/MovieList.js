import React from "react";
import IndividualMovie from "./IndividualMovie";

const MovieList = ({ list, onDelete }) => {

    const movieList = list.map((item) => {
        return (
            <IndividualMovie item={item} onDelete={onDelete}/>
        )});

    return (
        <ul>
            {movieList}            
        </ul>
    );
}

export default MovieList;