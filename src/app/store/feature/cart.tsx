import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  
  initialState,
  reducers: {
  }
})

export const {} = cartSlice.actions
export default cartSlice.reducer