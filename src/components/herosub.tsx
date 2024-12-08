import React from 'react'
import Brands from './prada'
import Versace from './versace'
import Gucci from './gucci'
import Zara from './zara'
import Prada from './prada'
import Calvin from './calvin'

const Herosub = () => {
  return (
    <div>
       <div className='h-[122px] bg-black mx-auto mt-[0px]
        flex items-center justify-evenly'> {/**All Brands div*/}
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
