import { StaticImageData } from "next/image";

/**StaticImageData ek special type hai jo Next.js ke optimized images ko represent karta hai.
Jab aap Next.js mein import image from '/path/to/image.jpg' use karte hain, toh woh
StaticImageData ke format mein aata hai agar sirf URL use karna ho, toh string[] type hoga. */


/*Product Page:
Product type ka use hota hai jahan aapko ek product ki complete detail dikhani ho. 
Example: Product ki multiple images, description, colors, etc. */
//type for product type say humnay structure batadiya hr object ka kay usmain kya values ainge unkee types kya hongein etc
//Product: Multiple images ka support hai (string[] | StaticImageData).
export type Product = {
    id: number;
    title:string;
    image?: string[] | StaticImageData | undefined | any //undefined: Agar image na ho. string: Agar multiple image URLs hain (e.g., ["img1.jpg", "img2.jpg"]).
    price: number;
    discount: number;
    rating:number;
    slug: string;
    description: string;
    category: string;
    color:string[];
    size:string[];
    quantity:number;   
}

/*Cart Page:
Cart type ka use hota hai jahan sirf selected products ka summary (jaise title, price, size, quantity) dikhana ho. */
//Yeh type shopping cart mein har item ka structure define karta hai
//Cart: Sirf ek image ka support hai (string | StaticImageData).
export type Cart = {
    id: number;
    title:string;
    image?: string | StaticImageData | undefined | any
    price: number;
    discount: number;
    slug: string;
    category: string;
    color:string;
    size:string;
    quantity:number;
    uuid: string | number | undefined;   
}