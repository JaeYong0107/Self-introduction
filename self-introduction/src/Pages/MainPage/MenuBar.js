import React from "react";
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <nav className="MenuBar">
            <Link to="/">Main</Link> | <Link to="/skill">Skill</Link> | {" "}
            <Link to="/portfolio">Portfolio</Link> | <Link to="/contact">Contact</Link> |
        </nav>
    )
}


export default Menubar;