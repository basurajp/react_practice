import React from 'react'

const NavBar = ({data}) => {
  return (
    <div className='w-full px-20  py-4  flex justify-between items-center '>
        <h1>Orange</h1>
        <div className="flex p-2 bg-orange-600 text-white rounded-md text-sm  gap-3">
            <h3>Favourite</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default NavBar