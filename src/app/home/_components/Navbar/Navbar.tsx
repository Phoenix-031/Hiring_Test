import React from 'react'
import Image from 'next/image';


import styles from './navbar.module.scss';

import loimg from '../../../../../public/assets/img/Lo.png';
import goimg from '../../../../../public/assets/img/Go.png';


const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
            <div>
                    <Image src={loimg} alt="logo" className={styles.lo__image} height={20}/>
                    <span>
                        <Image src={goimg} alt="logo" className={styles.go__image} height={20} />
                    </span>
            </div>

            <div>
                Sign Out
            </div>
    </div>
  )
}

export default Navbar