import React from 'react'
import stz from './input.module.css'

const Input = (props) => {
  return (
    <input {...props} className={stz.inp}/>
  )
}

export default Input