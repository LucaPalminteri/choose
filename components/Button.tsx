'use client'
import React from 'react'
import { useState } from 'react'

function Button({option}) {
const [value, setValue] = useState(0)

  return (
    <button onClick={() => window.location.reload()}>{option}</button>
  )
}

export default Button