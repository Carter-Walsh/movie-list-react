import React from "react";

const AddMovie = ({ movie, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input placeholder="Add Movie" type="text" value={movie} onChange={onChange}/>
            <button type="button" onClick={onSubmit} className="add-button">Add</button>
        </form>
    );
}

export default AddMovie;