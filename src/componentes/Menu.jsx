import React from "react";

// styles

import "../styles/Menu.styles.css"

const Menu = ({handleAllView, handleCompletedView, handleResetView, completedList}) => {
    return (
    <div className="buttons-menu">
        <button onClick={()=>handleAllView(completedList)} >All</button>
        <button onClick={()=>handleCompletedView(completedList)} >Completed</button>
        <button onClick={()=>handleResetView(completedList)}>Reset</button>

    </div>

    );

};

export default Menu;