import React from 'react'
import Button from './Button'
import { options } from '@/types/questions'

function Cards({options}:{options:options}) {

  return (
    <div>
        <main id="main">
            <Button option={options.option_one}/>
            <Button option={options.option_two}/>
        </main>
    </div>
  )
}

export default Cards