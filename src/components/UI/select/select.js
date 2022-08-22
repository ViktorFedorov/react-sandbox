import React from 'react'

const Select = ({options, defVal, select}) => {
  return (
    <select onChange={select}>
      <option value=''>{defVal}</option>
      {
        options.map(option => {
          return <option
            value={option.value}
            key={option.value}>{option.name}</option>
        })
      }
    </select>
  )
}

export default Select