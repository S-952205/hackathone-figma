'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

/* Provider Role: The Provider makes the Redux store available to the entire app*/
/* PersistGate Role: The PersistGate makes sure the app waits for the persisted state to load
 * before rendering anything. It wraps around {children} because we only want the app to show once state is ready.*/

const Providers = ({children,}: Readonly<{ children: React.ReactNode;}>) => {

  /**Is line ka kaam yeh hai:
     Redux Persist ko yeh batana ke yeh store (jo tumne banaya hai) ka data local
     storage ya kisi aur storage mein save kare aur jab app dobara reload ho to wahi
      data wapas la de (rehydrate kare)." 
      persistStore ka kaam hai Redux store ka data save (persist) aur reload (rehydrate)
       karwana, aur hum yeh kaam ek variable (persistor) banakar usko assign karte hain. 
       Yani, persistor ko ek helper ki tarah use karte hain jo yeh kaam handle kare*/
     let persistor = persistStore(store) //Yeh ek helper variable hai jo Redux store ke data ko save aur reload karne ke liye use hota hai
  
  return (
    <div>
      <Provider store={store}> 
        {/* 3. Use PersistGate to delay rendering until state is restored */}
        <PersistGate persistor={persistor}> 
          {children}  {/* 4. Render the actual app (children) */}
        </PersistGate>
      </Provider>
    </div>
  )
}

export default Providers

/**When we first set up Redux Toolkit, the goal is to make our state (data) globally accessible
across your entire app. To do this You create a Provider from Redux.
You wrap your app's content (children) with this Provider, so Redux can share the state everywhere. */