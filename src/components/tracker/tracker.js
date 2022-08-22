import React, {useEffect, useState} from 'react'

const Tracker = () => {
  const [coords, setCoords] = useState([])
  const [power, setPower] = useState(false)

  useEffect(() => {
    if (!power) return

    document.addEventListener('mousemove', mouseTrack)
  })

  const mouseTrack = (e) => {
    setCoords([e.clientX, e.clientY])
  }

  return (
    <div>
      <div>{power ? coords[0] : '-'}</div>
      <div>{power ? coords[1] : '-'}</div>
      <button
        onClick={() => setPower(!power)}
        >{power ? 'OFF' : 'ON'}</button>
    </div>
  )
}

export default Tracker