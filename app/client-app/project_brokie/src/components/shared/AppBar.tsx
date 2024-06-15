'use client';
import React, { useState } from 'react';
import styles from '@/styles/appBar.module.css';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { navItems } from '@/services/constant';
import { TNavItems } from '@/types/tConstant';
import Link from 'next/link';

const AppBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className={styles.appBar}>
      <Image src={logo} width={120} height={60} alt="logo"></Image>
      {openDrawer ? (
        <FaRegWindowClose
          onClick={() => setOpenDrawer(!openDrawer)}
          className={styles?.icon}
        ></FaRegWindowClose>
      ) : (
        <FaBars
          onClick={() => setOpenDrawer(!openDrawer)}
          className={styles?.icon}
        />
      )}

      <ul className={openDrawer ? styles.openMenu : styles.closeMenu}>
        <li className={styles.loginWrapper}>
            <Link href="">Login</Link>
        </li>
        
        {navItems.map((item: TNavItems) => (
          <li className={styles.navItem} key={item.title}>
            <Link href="#">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppBar;
