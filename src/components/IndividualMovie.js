import React, { useState } from "react";

const IndividualMovie = ( {onDelete, item }) => {

    const [activeClass, setActiveClass] = useState(false);

    const toggleClass = () => {
        setActiveClass(!activeClass);
    }

    return (
        <div key={item.id.toString()}>
            <li  onClick={toggleClass} className={activeClass ? "checked" : null}>
                {item.name}
            </li>
            <button onClick={() => onDelete(item.id)} className="delete-button">X</button>
        </div>
    );
}

export default IndividualMovie;

