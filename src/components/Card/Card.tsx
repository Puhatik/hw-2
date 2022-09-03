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
      <img src={image} alt="cardImg" />
      <div className={styles.card_description}>
        <p className={styles.card_description_category}>{category}</p>
        <h2>{title}</h2>
        <span>{content}</span>
        <p className={styles.card_description_price}>${price}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);
