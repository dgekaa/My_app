import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import "./Main.scss";

const Main = props => {
    const user = useSelector(state => state.auth.user);

    if(!user) return <Redirect to="/login" />

    return(
      <section className="mainWrap">
        <Header />
        <Sidebar />
      </section>
    )
}

export default Main;