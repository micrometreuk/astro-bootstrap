import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="mx-auto text-center mb-5 btn btn-primary"  >{ children }</button>
  )
}

export default Button;