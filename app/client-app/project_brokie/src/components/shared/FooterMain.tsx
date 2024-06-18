import React from 'react';
import styles from '@/styles/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import { fItems } from '@/services/constant';

const FooterMain = () => {
 
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerInfo}>
        <Link className={styles.logo} href="/">
          <Image src={logo} width={120} height={60} alt="logo"></Image>
        </Link>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id
        </p>
      </div>
      <div className={styles.footerItems}>
        {fItems.map((fi: any) => (
          <div key={fi.title}>
            <h3>{fi.title}</h3>
            <br />

            <ul>
              {fi.items.map((fi_item: any) => (
                <li key={fi_item.item}>
                  <Link href={fi_item.link}>{fi_item.item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMain;
