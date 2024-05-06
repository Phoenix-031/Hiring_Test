"use client";

import React from 'react';
import Image from 'next/image';

// style imports

import styles from '@/app/auth/auth.module.scss';

//asset imports

import authimg from "../../../public/assets/img/painting-person-standing-cliff-with-blue-lake-background 2.png";
import loimg from "../../../public/assets/img/Lo.png";
import goimg from "../../../public/assets/img/Go.png";

import googleimg from "../../../public/assets/img/google.png";
import messageimg from "../../../public/assets/img/Message.png";

const SignUp = () => {
  return (
    <div className={styles.main__container}>
        <div className={styles.image__container}>
            <Image src={authimg} alt="logo" className={styles.auth__image} />
        </div>
        <div className={styles.signup__container}>
            <div>
                <div>
                        <Image src={loimg} alt="logo" className={styles.lo__image} />
                        <span>
                            <Image src={goimg} alt="logo" className={styles.go__image} />
                        </span>
                </div>
                <div>
                    <p>Journey to a trillion miles starts from here!!</p>
                </div>
            </div>

            <div className={styles.signup__inner__container}>

                <div>
                <div>
                    <div>
                        <p>Sign up</p>
                    </div>
                    <div>
                        <p>Choose a signup method</p>
                    </div>
                </div>
                <div>
                    <button>
                        <p><Image src={googleimg} alt='google image' /></p>
                        <p>Sign up with Google</p>
                    </button>
                    <button>
                        <p><Image src={messageimg} alt='message image' /></p>
                        <p>Sign up with Email</p>
                    </button>
                </div>
                <div>
                    <p>Already a user? <span>Log in</span></p>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp