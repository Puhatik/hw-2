import React from 'react';

import styles from './Card.module.scss';

type CardProps = {
  image: string;
  title: React.ReactNode;
  category: React.ReactNode;
  price: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  category,
  price,
  content,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={image} />
      <div className={styles.description}>
        <p className={styles.category}>{category}</p>
        <h2>{title}</h2>
        <span>{content}</span>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};

export default Card;
