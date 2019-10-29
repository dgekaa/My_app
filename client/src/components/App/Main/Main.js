import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";

import "./Main.scss";

const Main = props => {
    const user = useSelector(state => state.auth.user);

    if(!user) return <Redirect to="/login" />

    return(
      <section className="mainWrap">
        <Header />
        <Sidebar />
        <Profile />
      </section>
    )
}

export default Main;