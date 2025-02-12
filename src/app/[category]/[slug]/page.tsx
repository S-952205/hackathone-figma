import React from 'react'
import Slugpage from './slugpage'

//ab sirf component client side hai jo detail page dikharaha slugpage
const Slugentry = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Slugpage params={params}/> 
    </div>
  )
}

export default Slugentry
