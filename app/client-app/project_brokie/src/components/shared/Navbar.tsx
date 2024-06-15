import React from 'react';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import { navItems } from '@/services/constant';
import { TNavItems } from '@/types/tConstant';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarLogo}>
          <Link href="/">
            <Image src={logo} width={120} height={60} alt="logo"></Image>
          </Link>
        </div>

        <div className={styles.navbarItems}>
          <ul>
            {navItems.map((item: TNavItems) => (
              <li key={item.title}>
                <Link href="">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navbarRight}></div>
    </div>
  );
};

export default Navbar;
