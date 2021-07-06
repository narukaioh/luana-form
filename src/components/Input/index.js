import React from 'react'

const Input = ({ onChange, type, name, placeholder }) => {
    return (
      <input 
        onChange={onChange}
        name={name}
        type={type} 
        placeholder={placeholder} />)
  }

export default Input