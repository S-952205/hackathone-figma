import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './feature/product'
import  cartSlice  from './feature/cart'
// ...

export const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch