import React from "react";


const MovieList = ({ list }) => {
    return (
        <ul>
            {list.map((element) => (
                <div>
                    <li key={element}>{element}</li>
                    <button className="delete-button">X</button>
                </div>
            ))}
        </ul>
    )
}

export default MovieList;