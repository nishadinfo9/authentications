import React from 'react'

const Button = ({
  type, label, className=''
}) => {
  return (
    <button className={`px-8 py-2 bg-green-500 rounded-3xl cursor-pointer ${className}`} type={type}>{label}</button>
  )
}

export default Button