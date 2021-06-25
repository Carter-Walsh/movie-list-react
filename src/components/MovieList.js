import React, { useState } from "react";


const MovieList = ({ list }) => {

    const [activeClass, setActiveClass] = useState(false);

    const toggleClass = () => {
        setActiveClass(!activeClass);
    }

    return (
        <ul>
            {list.map((item) => (
                <li key={item.id} onClick={toggleClass} className={activeClass ? "checked" : null}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default MovieList;