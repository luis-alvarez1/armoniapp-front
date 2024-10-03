import React from 'react'
import classNames from 'classnames'

const CButton = ({
  color = 'primary',
  size = 'md',
  outline = false,
  margin = '2',
  className,
  children = 'example...',
  ...props
}) => {
  const buttonClasses = classNames(
    'btn',
    {
      [`btn-${color}`]: !outline,
      [`btn-outline-${color}`]: outline,
      [`btn-${size}`]: size !== 'md',
      [`m-${margin}`]: margin,
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default CButton;