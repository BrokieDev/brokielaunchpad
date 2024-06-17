'use client';
import React, { useState } from 'react';
import styles from '@/styles/projects.module.css';
import Image from 'next/image';
import fire_icon from '@/assets/icons/fire_icon.png';

const Projects = () => {
  const [op, setOp] = useState(true);
//   op = ongoing projects
  return (
    <div className={styles.container}>
      <div className={styles.projectsTop}>
        <h2>
          <span>Latest Project</span>
          <Image src={fire_icon} width={20} height={20} alt="fire"></Image>
        </h2>

        <div className={styles.buttonWrapper}>
          <span
          className={op ? styles.left_active : styles.right_active}
          >

            {op ? "Ongoing Projects" : 'To Be Launched'}
          </span>

          <button onClick={() => setOp(true)}>Ongoing Projects</button>
          <button onClick={() => setOp(false)}>To Be Launched</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
