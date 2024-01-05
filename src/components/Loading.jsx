import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-[30rem]'>
        <svg className='svg' viewBox="25 25 50 50">
  <circle className='circle' r={20} cy={50} cx={50} />
</svg>
        </div>
  )
}

export default Loading