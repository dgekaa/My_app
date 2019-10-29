import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../../store/actions/auth";

import "./Header.scss";

const Header = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
   
    return(
      <section className="header">
        <h4 className="heading">Добро пожаловать, {user}</h4>
        <span className="logOut"
          onClick={()=>{dispatch(logout())}}
        >
          Выйти
        </span>
      </section>
        
    )
}

export default Header;