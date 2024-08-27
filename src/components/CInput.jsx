import React from 'react'
import classNames from 'classnames'

const CInput = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = 'example...',
  size = 'md',
  color = 'primary',
  outline = false,
  className,
  ...props
}) => {
  const inputClasses = classNames(
    'form-control w-50 border-2 shadow-none',
    {
      [`form-control-${size}`]: size !== 'md',
      [`border-${color}`]: outline,
    },
    className
  )

  return (
    <div className="form-group d-flex justify-content-center">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
    </div>
  )
}

export default CInput