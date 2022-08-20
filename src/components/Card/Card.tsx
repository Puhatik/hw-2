import React from 'react';

type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({ 
    image,
    title,
    subtitle,
    content,
    onClick 
  }) => {
    return (
      <div onClick={onClick}>
        <img src={image}/>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
};