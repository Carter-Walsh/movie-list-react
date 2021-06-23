import React from "react";

const AddMovie = ({ name, onChange, onSubmit }) => {
    return (
        <div>
            <input placeholder="Add Movie" type="text" value={name} onChange={onChange}/>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default AddMovie;