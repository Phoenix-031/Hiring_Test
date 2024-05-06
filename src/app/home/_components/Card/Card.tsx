import Image, { StaticImageData } from 'next/image';
import React from 'react'


import styles from './card.module.scss';

interface CardProps {
    cardinfo: {
        title : string;
        description : string;
        image : StaticImageData;
    }
}

const Card = ({cardinfo} : CardProps) => {
  return (
    <div className={styles.card__main__container}>
        <div>
            <div>
                <Image src={cardinfo.image} alt="logo" />
            </div>
            <div>
                <div>
                    <p>{cardinfo.title}</p>
                </div>
                <div>
                    <p>{cardinfo.description}</p>
                </div>
            </div>
        </div>
        <button>
            READ
        </button>
    </div>
  )
}

export default Card