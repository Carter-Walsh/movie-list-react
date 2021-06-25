import React, { useState } from "react";
// eslint-disable-next-line
import styles from "../css/styles.css";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import uuid from "react-uuid";

const initialList = [
    {
        id: 1,
        name: "Infinity War"
    },
    {
        id: 2,
        name: "Endgame"
    }
];

const Form = () => {

    const [list, setList] = useState(initialList);
    const [movie, setMovie] = useState("");

    function handleChange(event) {
        setMovie(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newList = list.concat({ name: movie, id: uuid() });
        setList(newList);
        setMovie("");
    }

    return (
        <main>
            <h1>Movie List</h1>
                <AddMovie 
                    movie={movie}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <MovieList list={list}/>
            
        </main>
        )
    }


export default Form;