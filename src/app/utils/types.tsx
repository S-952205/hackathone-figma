/*Cart Page:
Cart type ka use hota hai jahan sirf selected products ka summary (jaise title, price, size, quantity) dikhana ho. */
//Yeh type shopping cart mein har item ka structure define karta hai
//Cart: Sirf ek image ka support hai (string | StaticImageData).

//image?: string iska mtlb hai image optional hai mtlb hoskta sb products kee image na hoo isliye issay optional 
//rakhtay agar image mjhe pata hamesha milay gee tw required rakhtay means simple imgae:string image ka component
//undefined nhi smjhta jb hum optional rakhtay tw image undefined hojata kis ka image nhi ata
// undefined hoga uskayliye hum fallback means ui main default image dekhana parayga
//  like this src={item.image || '/default-image.jpg'} // Fallback agar image undefined ho
//Advantage: App crash nahi karega. Agar image undefined hai, to ek default image dikhayega
//Disadvantage: Code thoda extra likhna padega aur aapko har jagah check karna padega
//Question mark (?) kyun avoid karein? Agar aap optional types (image?: string) use karte hain,
//to aapko har jagah checks karne padenge. Yeh unnecessary complexity hai agar image hamesha required ho sakti hai.
//Jab aap kisi property ko optional banate hain (e.g., discount?),
// TypeScript maan leta hai ki wo property ho bhi sakti hai aur nahi bhi. Agar wo property missing ho, to uski value undefined hogi.

export type Cart = {
    id: string;
    title:string;
    image: string 
    price: number;
    discount: number;
    slug: string;
    category: string;
    color:string;
    size:string;
    quantity:number;
    uuid: string | number | undefined;   
}