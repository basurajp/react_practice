import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="w-full max-h-96 overflow-auto  bg-sky-200 p-4 rounded-lg flex justify-center gap-2  flex-wrap  ">
        <Card />
     
    </div>
  )
}

export default Cards