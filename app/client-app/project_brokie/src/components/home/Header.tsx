import React from 'react';
import styles from "@/styles/header.module.css"
import Navbar from '../shared/Navbar';

const Header = () => {
    return (
        <div className={styles.container}>
           <Navbar></Navbar>
        </div>
    );
};

export default Header;