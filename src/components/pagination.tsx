import Link from 'next/link'
import React from 'react'
import { PaginationEllipsis, PaginationItem } from './ui/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Pagination = () => {
  return (
    <div className='max-w-[920px] h-[40px] flex flex-row justify-between'>
      <Link href={''}>
        <div className='w-[110px] h-[36px] flex flex-row justify-center gap-[8px] items-center
         px-[14px] py-[8px] border-[1px] border-black/10 rounded-[8px]'>
         <ArrowLeft size={11.67} className="text-black"/>
         <span className='font-Satoshi text-[14px]
         font-[500] text-black'>Previous</span>
       </div>
     </Link>

      <div className='w-[292px] h-[40px] flex flex-row items-center'> 
        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>1</button>
        </Link>

        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>2</button>
        </Link>

        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>3</button>
        </Link>

        <PaginationItem className='flex flex-row items-center'>
            <PaginationEllipsis />
        </PaginationItem>

        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>8</button>
        </Link>

        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>9</button>
        </Link>

        <Link href={''}><button className='w-[40px] h-[40px] font-Satoshi text-[14px]
         font-[500] text-black/50 focus:text-black focus:bg-[#f0f0f0] 
         focus:rounded-[8px]'>10</button>
        </Link>

      </div>

      <Link href={''}>
        <div className='w-[86px] h-[36px] flex flex-row justify-center gap-[8px] items-center
         px-[14px] py-[8px] border-[1px] border-black/10 rounded-[8px]'>        
         <span className='font-Satoshi text-[14px]
         font-[500] text-black'>Next</span>
         <ArrowRight size={11.67} className="text-black"/>
       </div>
     </Link>
    </div>
  )
}

export default Pagination
