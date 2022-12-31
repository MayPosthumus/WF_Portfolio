import React from 'react';
import styles from "./header.module.css";
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className={styles.header}>
            <h1>May Posthumus</h1>
            <div className={styles.nav}>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="portfolio">Portfolio</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="contact">Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;