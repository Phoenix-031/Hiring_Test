"use client";

import React from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

import {app} from '@/firebase/firebase.config';

// style imports

import styles from './auth.module.scss'

//asset imports

import authimg from "../../public/assets/img/painting-person-standing-cliff-with-blue-lake-background 2.png";
import loimg from "../../public/assets/img/Lo.png";
import goimg from "../../public/assets/img/Go.png";

import googleimg from "../../public/assets/img/google.png";
import messageimg from "../../public/assets/img/Message.png";

const SignUp = () => {

    const [user, setUser] = useState<any>(null);
    const [withEmail, setWithEmail] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const router = useRouter();
    const auth = getAuth(app)
    const [createUserWithEmailAndPasssword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignUpEmail = async() => {
        try {
            const res = await createUserWithEmailAndPasssword(email, password);

            if(res) {
                router.push("/home");
            }
            //resets the email and password fields
            setEmail("");
            setPassword("");
        } catch (error : any) {
            console.log("An error occurred", error.message);
        }
    }

    useEffect(() => {
        const auth = getAuth();
        const stchangefunc = auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
            }else {
                setUser(null);
            }
        })
        
        console.log(user)

        return () => stchangefunc();
    })

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/home");
        } catch (error : any) {
            console.log("an error occurred", error.message);
        }
    }
    
  return (
    <div className={styles.main__container}>
        <div className={styles.image__container}>
            <Image src={authimg} alt="logo" className={styles.auth__image} />
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

                {
                    withEmail ? (
                        <div className={styles.signup__email__container}>
                            <div>
                                <p>Sign up with Email</p>
                            </div>
                            <div>
                                <div>
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSignUpEmail}>
                                    <p>Sign up</p>
                                </button>
                            </div>
                        </div>
                    ) : (
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
                        <button onClick={signInWithGoogle}>
                            <p><Image src={googleimg} alt='google image' /></p>
                            <p>Sign up with Google</p>
                        </button>
                        <button onClick={() => setWithEmail(true)}>
                            <p><Image src={messageimg} alt='message image' /></p>
                            <p>Sign up with Email</p>
                        </button>
                    </div>
                    
                    <div>
                        <p>Already a user? <span>Log in</span></p>
                    </div>
                </div>
                    )
                }

            </div>
        </div>
    </div>
  )
}

export default SignUp