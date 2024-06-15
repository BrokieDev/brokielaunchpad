import React from 'react';
import styles from "@/styles/header.module.css"
import Navbar from '../shared/Navbar';
import AppBar from '../shared/AppBar';

const Header = () => {
    return (
        <div className={styles.container}>
           <Navbar></Navbar>
           <AppBar></AppBar>
        </div>
    );
};

export default Header;