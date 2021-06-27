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

    const handleChange = (event) => {
        setMovie(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newList = list.concat({ name: movie, id: uuid() });
        setList(newList);
        setMovie("");
    }

    const handleDelete = (movieName) => {
        const items = list.filter(item => item.name !== movieName && item.name !== null);
        setList(items);
    };

    return (
        <main>
            <h1>Movie List</h1>
                <AddMovie 
                    movie={movie}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <MovieList 
                    list={list}
                    onDelete={handleDelete}
                />
            
        </main>
        )
    }


export default Form;