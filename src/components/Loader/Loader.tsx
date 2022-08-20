import React from 'react'
import classNames from 'classnames'

enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};


export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size,
  className
}) => {

  const cn = classNames(
    {
      [`${className}`]: className,
      [`loader_size-${size}`]: size, 
      'loader_size-m': !size
    }
  )

  return (
    <>
      {loading && (<img className={cn}/>)}
    </>
  )
};