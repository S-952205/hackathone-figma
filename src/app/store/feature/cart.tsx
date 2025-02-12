import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Cart[] = []


/*state tumhari cart ki puri list hai, jo array ki form mein hoti hai.
Iske andar tumhare sare products ka data hota hai, har ek product as a single object stored hota hai */

export const cartSlice = createSlice({
   name: 'cart',

   initialState,
   reducers: {
      //addtocart function
      addToCart(state, action) {
         let uuid = Math.floor(1000 + Math.random() * 9000); //yeh 4 number kee id generate kray ga

         /*isline pay hum new array banarahy hain ...action.payload main woo data aya jo user
         nay select krkay add to cart pay click kiya woo data action.payload main hoga jo dispatch ke
         zariye reducer ko milta hai ab hum uss data ko or ,uuid bhee usmain daal
         kr newobj main bhej rahay hain */
         let newObj = { ...action.payload, uuid };
         state.push(newObj); //yeh line newobj kay under jo data hai woo cart main bhejraha cart main eik naya object chala gya
      },

      //Removed from cart
      //filter ka kaam hai unwanted cheezon ko nikal dena aur baaki ka refined list banana mtlb new array return krta
      //mene match kiya kay id match na hoo payload.id say agar match hui tw ussay remove or new array miljaigi
      //find hum tb use krtay jb humein sirf eik element chahiye hota filetr tb use krtay jb poori array ko process krna
      //..hoo.
      delItem(state, { payload }) {
         return state.filter((val) => val.uuid !== payload)
      },

      //add quantity
      /**Yeh function Check karta hai ki kya product already cart mein exist karta hai?
        Agar haan, toh uski quantity ko increase karega.
       Uske baad state ko update karega, taki naye object ke saath puri state fresh ho jaye.
       Size aur color ka check isliye kiya gaya hai taake:
       Woh specific item identify ho jaye jo user ne cart mein select kiya hai.
       Example: Agar user Red T-shirt (Size M) ko cart mein hai aur uska quantity button
       click kare, toh woh Red M wali item ki quantity update kare, na ke kisi aur
       variation ki. Alag variations confuse na karein.
       Agar cart mein ek hi T-shirt ka alag size ya color hai, toh dono ko alag treat kare.
       Har variation (size + color) apni alag identity rakhta hai.

*/
      //state main saray carts item jo add huay, actions main woo jispay click hua woo item  
      addCart(state, action) {
         let obj = state.find(                      //obj main woo item store hoga jiski id size color state 
            (val) => val.id == action.payload.id && // main jo item hai ussay match kray ga 
               val.color == action.payload.color &&
               val.size == action.payload.size
         );
         //check kiya kya obj exist krta mtlb woo item jo upper match hua or obj main aya woo hai kay nhi.
         if (obj) { 

            //obj hai tw uss item kee quantity plus krdo agar red large tshirt pehlay 1 thee ab 1 say ziada krdee
            ++obj.quantity; 
            /*ab humnay newstate main old wala remove krdiya jiski id objid say match hui ussay or jo bacha woo newstate main
             store hogya means yeh kay / Purane item ko cart se nikalo iss line pay*/
            let newState = state.filter((val) => val.id !== obj?.id)

            //state banaa usmain newstate main jo item hain unhein or obj main jo hai woo usmain last main
            //store krdiya // Updated item ko cart mein daalo/
            /*Spread Operator (...) sirf newState ke andar jo objects hain, unko bahar nikal kar
              directly add karta hai mtlb newstate array hain usmain object hai woo object nikal kr ussay
              state main store krraha state array hai or last main obj add krraha state main
              ... (spread operator) sirf elements ko bahar nikalta hai */
            state = [...newState, obj]; //square brackets isliye yeh eik naya array bana kr deraha ...newState ke elements or obj

            //return isliye kay execution iss line pay khtm krdi end krdo
            return;
         }
      },

      //minus quantity
      subtractCart(state, action){
         // Sabse pehle, hum cart mein se uss product ko dhundhte hain jo user ne subtract karna hai
         let obj = state.find(                      
            (val) => val.id == action.payload.id && 
               val.color == action.payload.color &&
               val.size == action.payload.size
         );
         //If the product is found (obj is not undefined)
         if(obj !== undefined){

         //If the quantity is 1 or less, remove the item from the cart completely mtlb quantity 1 hau
         //or agar hum zero krnay kee try krein gay tw item completely cart say remove kreingay hojaiga rrmove
          if(obj.quantity <= 1){
           return  state.filter((val) => val.uuid !== obj?.uuid)// Remove item from state based on its unique uuid
          }
          
          //Agar quantity 1 se zyada hai, toh quantity ko 1 se kam kar dete hain
          --obj.quantity
          //Fir, hum cart ke andar se purane item ko hata dete hain
          let newState = state.filter((val) => val.uuid !== obj?.uuid)

         //Phir, hum updated item ko cart mein wapas daal dete hain, jisme quantity reduce ho chuki hoti hai
          state = [...newState, obj];
          return;
         }
      }

   },
})

export const { addToCart, delItem, addCart, subtractCart} = cartSlice.actions
export default cartSlice.reducer