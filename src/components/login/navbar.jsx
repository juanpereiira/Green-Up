import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Title">Green Up</div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/SignUp">Sign-Up</a>

        </nav>
    )
}