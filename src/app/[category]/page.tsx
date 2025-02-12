import React from 'react'
import Category from './category'

//ab sirf component client side hai jo detail page dikharaha slugpage
const Categoryentry = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <Category params={params}/> 
    </div>
  )
}

export default Categoryentry

