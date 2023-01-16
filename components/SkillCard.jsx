import Image from 'next/image'
import React, { useState } from 'react'

const SkillCard = ( {data} ) => {
    const [tip, setTip] = useState(false)
  return (
    <div 
        className='p-2 shadow-xl relative shadow-gray-500 cursor-pointer transition-transform hover:scale-110'
        onMouseEnter={() => setTip(!tip)}
        onMouseLeave={() => setTip(!tip)}
        key={data.id}
        >
        <p className={tip ? ' absolute p-3 bottom-24 lg:bottom-28 lg:text-xl rounded-xl shadow-lg text-black' : 'hidden'}>{data.name}</p>
        <Image src={data.img} alt={data.name} className='w-28 p-3' />
    </div>
  )
}

export default SkillCard
