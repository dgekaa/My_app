import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

// import "./Main.scss";

const Main = props => {
    const user = useSelector(state => state.auth.user);
    if(!user) return <Redirect to="/login" />
    return(
        <div>Main</div>
    )
}

export default Main;