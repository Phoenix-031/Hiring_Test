/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import styles from './navbar.module.scss';

import loimg from '../../../../../public/assets/img/Lo.png';
import goimg from '../../../../../public/assets/img/Go.png';
import { app } from '@/firebase/firebase.config';


const Navbar = () => {

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('user');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log(user);
      } else {
        router.push('/auth');
      }
    })
  })

  const signOutUser = async () => {
    try {
      await signOut(auth);
      router.push('/auth');
    } catch (error : any) {
      console.log("An error occurred", error.message);
    }
  }


  
  return (
    <div className={styles.navbar__container}>
            <div>
                    <Image src={loimg} alt="logo" className={styles.lo__image} height={20}/>
                    <span>
                        <Image src={goimg} alt="logo" className={styles.go__image} height={20} />
                    </span>
            </div>

            <div>
              <div onClick={signOutUser}>
                Sign Out
              </div>
            </div>
    </div>
  )
}

export default Navbar