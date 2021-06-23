import React, { useState } from "react";
// eslint-disable-next-line
import styles from "../css/form.css";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";


const Form = () => {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");

function handleChange(event) {
    setName(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    const newList = list.concat(name);
    setList(newList);
    setName("");
}

        return (
            <main>
                <h1>Movie List</h1>
                <section>
                    <form>
                    <AddMovie 
                        name={name}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    </form>
                </section>
                <ul>
                    <MovieList list={list}/>
                </ul>
            </main>
        )
    }


export default Form;