import React from 'react'
import stz from './button.module.css'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={stz.btn}>
      {children}
    </button>
  )
}

export default Button