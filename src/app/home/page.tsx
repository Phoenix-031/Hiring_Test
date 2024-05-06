"use client";

import React from 'react'

// style imports

import styles from './home.module.scss';

//data

import { cardData } from '@/data/cardData';
import Card from './_components/Card/Card';
import Image, { StaticImageData } from 'next/image';

import leftarrow from '../../../public/assets/img/Frame 8.png';
import rightarrow from '../../../public/assets/img/Frame 7.png';

interface Icardinfo{
    title : string;
    description : string;
    image : StaticImageData;
}

const Home = () => {
  return (
    <div className={styles.home__main__container}>
      <div>
        <div>
          <p>Popular Topics</p>
        </div>

        <div>
          <span> <Image src={rightarrow} alt='right arrow' /> </span>
          <span> <Image src={leftarrow} alt='left arrow' /> </span>
        </div>
      </div>

      <div>
        <div>
        {
          cardData.map((cardinfo : Icardinfo, index :number) => {
            return <Card key={index} cardinfo={cardinfo} />
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home