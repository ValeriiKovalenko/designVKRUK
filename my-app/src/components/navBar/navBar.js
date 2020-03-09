import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import style from './navBar.module.css';

class navBar extends Component {
    render() {
        return (
            <header className={style.header}>
                <nav className={style.navBar}>
                    <NavLink exact to="/">
                        INTERIOR DESIGNER VALYA KRUK
                        {/* <img src="#" alt="logotype" /> */}
                    </NavLink>

                    <NavLink exact to="/portfolio">Portfolio</NavLink>

                    <NavLink exact to="/prices">Prices</NavLink>
                    <NavLink exact to="/about">About</NavLink>
                    <NavLink exact to="/contacts">Contacts</NavLink>


                </nav>
            </header>
        )
    }
}
export default navBar;
