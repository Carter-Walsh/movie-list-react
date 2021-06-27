import React, { useState } from "react";

const MovieList = ({ list, onDelete }) => {

    const [activeClass, setActiveClass] = useState(false);

    const toggleClass = () => {
        setActiveClass(!activeClass);
    }

    return (
        <ul>
            {list.map((item) => (
                <div key={item.id.toString()} >      
                    <li onClick={toggleClass} className={activeClass ? "checked" : null}>
                        {item.name}
                    </li>
                    <button onClick={(event) => onDelete(event.target.parentElement.childNodes[0].outerText)} className="delete-button">X</button>
                </div>
            ))}
        </ul>
    );
}

export default MovieList;