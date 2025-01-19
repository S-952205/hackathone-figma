import React from 'react'
import Versace from './versace'
import Gucci from './gucci'
import Zara from './zara'
import Prada from './prada'
import Calvin from './calvin'

const Herosub = () => {
  return (
    <div>
       <div className='bg-black mx-auto mt-[0px] p-[38px]
        flex items-center lg:justify-evenly flex-wrap gap-10'> {/**All Brands div*/}
           <Versace/>
           <Zara/>
           <Gucci/>
           <Prada/>
           <Calvin/>
       </div>
    </div>
  )
}

export default Herosub
