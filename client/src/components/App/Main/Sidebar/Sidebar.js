import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = props => {
    const dispatch = useDispatch();
   
    return(
      <section className="sidebar">
        <span className="sidebarSpan">
          Sidebar          
        </span>        
        <Link to="/toDo">
          ToDo
        </Link>
      </section>
        
    )
}

export default Sidebar;