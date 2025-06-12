import React from 'react'

const Input = ({
  type, className='', error, ...props
}) => {
  return (
    <div>
      <input className={`p-2 border rounded-md w-full outline-none ${className}`} type={type} {...props} />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Input