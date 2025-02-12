import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './feature/cart'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

const persistConfiq = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  cart:cartSlice
})

const persistedReducer = persistReducer(persistConfiq, reducer)

/**Redux mein serializable values ka use karna zaruri hota hai, kyun ke Redux ka kaam state ko
 * track karna aur usko save karna hai. Serializable values wo hoti 
 * hain jo simple data types mein convert ho sakti hain */

export const store = configureStore({
  reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false // Disable serializable check
    }),
  
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch