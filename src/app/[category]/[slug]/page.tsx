'use client'
import Downarrow from '@/components/downarrow'
import Elipseslug from '@/components/elipseslug'
import Filterblackicon from '@/components/filterblackicon'
import Greentick from '@/components/greentick'
import Halfstar from '@/components/halfstar'
import Ratinghalf from '@/components/pricehalf'
import Pricestar from '@/components/pricestar'
import Ratingtwo from '@/components/ratingtwo'
import { client } from '@/sanity/lib/client'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


//fetch products base on slug from sanity
async function getdetail(slug: string) {
  const query = await client.fetch(`* [_type == 'products' && slug.current == '${slug}']
{
  _id,
    title,
    "imageUrl": image.asset->url,
    description,
    price,
    discountprice,
    discountpercent,
    rating,
    quantity,
    'slug':slug.current,
    category,
    size,
    color,
}[0]`);

  return query;
}

//fetch kein specific 4 products to display on detail page
async function getproducts() {
  const query = await client.fetch(`* [_type == 'products' && title in ['Casual Green Bomber Jacket',
                                    'Gradient Graphic T-shirt',
   'Classic Black Pullover Hoodie', 'Black Striped T-Shirt']]
{
  _id,
    title,
    "imageUrl": image.asset->url,
    description,
    price,
    discountprice,
    discountpercent,
    rating,
    'slug':slug.current,
    category,
    
}`)

  return query;

}

const Slug = ({ params }: { params: { slug: string } }) => {
 

  const [products, setProducts] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await getdetail(params.slug); 
      setProducts(data); 
    };

    fetchData();
  }, [params.slug]);


  // State to store fetched data <any[]> means kisi bhee type ka data store hoskta 
    const [specific, setSpecific] = useState<any[]>([]); //empty array shuru main ([])
  
    //ab ye component pehli baar render hota hai, useEffect chalega aur data
    //fetch karne ka kaam shuru karega
    useEffect(() => {
      // Fetch the data when the component mounts (mount means render)
      const fetchData = async () => {
        const data = await getproducts(); //function ke through Sanity se data fetch hota hai.
        setSpecific(data);
      };
      
      fetchData(); // Call the function to fetch data
    }, []); 
 

  return (
    <div className='mt-[20px] mb-[50px]'>
      <div className='w-[1240px] mx-auto mb-[15px]'>
        <div className="breadcrumbs text-sm">
          <ul>
            <li className='font-Satoshi font-[400] text-[16px] text-black/60 decoration-none'>
              <Link href={'/'}>Home</Link></li>
            <li className='font-Satoshi font-[400] text-[16px] text-black/60'>
              <Link href={''}>Shop</Link></li>
            <li className='font-Satoshi font-[400] text-[16px] text-black/60'>
              <Link href={''}>Men</Link></li>
            <li className='font-Satoshi font-[400] text-[16px] text-black/60 capitalize'>
              <Link href={'/'}>{products.category}</Link></li>
          </ul>
        </div>
      </div>

      <div className='w-[1240px] mx-auto flex flex-row justify-between'>

        {/**left container */}
        {/* <Slugimage image={products.imageUrl} /> */}
        <div className='w-[605px] h-[530px] flex flex-row justify-between'>
          {/**left side 3 images */}
          <div className="h-[530px] flex flex-col justify-between">
            <div className="w-[152px] h-[167px]">
              <Image
                src={products.imageUrl}
                alt="img1"
                width={152}
                height={168}
                className="cursor-pointer"

              />
            </div>

          </div>


          {/**Right side full image */}
          <div className='w-[444px] h-[551px]'>
            <Image src={products.imageUrl} alt='fullimg' width={444} height={551}  className='overflow-hidden w-[444px] h-[551px]'/>
          </div>
        </div>

        {/**Right Container*/}
        <div className='w-[600px]  flex flex-col gap-[10px]'>
          {/**Title */}
          <p className='font-Integral font-[900] uppercase text-[40px] text-black'>{products.title}</p>

          {/**Rating */}
          <div className='w-[193px] h-[24.71px] flex gap-[8px]'>
            <div className='max-w-[139px] h-[24.71px] flex flex-row gap-[6px]'>
              {/**logic lagai hai jo rating kee base pay stars generate kray gee ratibg mtlb 2 3 4 5 */}
              {Array.from({ length: Math.floor(products.rating) }).map(
                (_, i) => (
                  <Ratingtwo />
                )
              )}

              {products.rating % 1 !== 0 && <Ratinghalf />} {/** */}
            </div>
            <p className='font-Satoshi font-[400] text-[16px] text-black'>{products.rating}
              <span className="font-Satoshi font-[400] text-[16px] text-[#666666]">/5</span></p>
          </div>

          {/**Price */}
          <div className='w-[263px] h-[40px] flex flex-row items-center gap-[14px]'>
            <div className='flex flex-row items-center gap-[14px]'>
              {products.discountpercent > 0 &&
                <p className='font-Satoshi font-[700] text-[32px] text-black'>
                  ${ products.price - (products.price * products.discountpercent) / 100 }</p>}
              <p className={`font-Satoshi font-[700] text-[32px] text-black
              ${products.discountpercent > 0 && 'line-through text-black/30 decoration-2'}`}>
                ${products.price}</p>
            </div>

            {
              products.discountpercent > 0 && <div className='h-[34px] px-[6px] py-[14px] rounded-[62px] bg-[#FF33331A]
            flex flex-row justify-center items-center'>
                <p className='text-[#FF3333] font-Satoshi font-[500] text-[16px]'>-{products.discountpercent}%</p>
              </div>
            }
          </div>
          {/**Description */}
          <p className='font-Satoshi font-[400] text-[16px] text-black/60'>{products.description}</p>

          <div className="divider mt-1 mb-1"></div>

          {/**Colors */}
          {/**setcartitem ko nayi value dene ke liye hum purana cartitem object lete hain (...cartitem)
           *  aur sirf color ki value ko update karte hain */}
          <div className='w-[144px] h-[75px] flex flex-col justify-between'>
            <p className='font-Satoshi font-[400] text-[16px] text-black/60'>Select Colors</p>
            {products.color && products.color.length > 0 && (
              <div className='w-[143px] h-[37px] flex flex-row justify-between mt-2'>
                {products.color.map((item: string, i: number) => (
                  <button key={i} className="rounded-full w-[37px] h-[37px] focus:border-[2px] focus:border-red-400 " style={{ backgroundColor: item }}></button>
                ))}
              </div>
            )}
          </div>

          <div className="divider mt-1 mb-1"></div>

          {/**Sizes */}
          <div className='w-[422px] h-[86px] flex flex-col justify-between'>
            <p className='font-Satoshi font-[400] text-[16px] text-black/60'>Choose Size</p>
            <div className='w-[420px] h-[46px] flex flex-row justify-between mt-2'>
              {products.size && products.size.length > 0 ? (
                products.size.map((item:string, i:number) => (
                  <button
                    key={i}
                    // onClick={() => setcartitem({ ...cartitem, color: item })}
                    className='max-w-[105px] h-[46px] rounded-[62px] py-[12px] px-[24px] 
                  font-[400] whitespace-nowrap bg-[#f0f0f0] text-black/60 focus:font-[500]
                   focus:bg-black  focus:text-white transition duration-200'
                    style={{ backgroundColor: item }}>
                      <p className='font-Satoshi text-[16px]'>{item}</p>
                    </button>
                ))
              ) : (
                <p>No colors available</p>
              )}

              {/* <button className='w-[105px] h-[46px] rounded-[62px] py-[10px] px-[20px] font-[400] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200'>
                <p className='font-Satoshi  text-[16px] '>Medium</p>
              </button>
              <button className='w-[89px] h-[46px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200'>
                <p className='font-Satoshi font-[400] text-[16px]'>Large</p>
              </button>
              <button className='w-[104px] h-[46px] rounded-[62px] py-[10px] px-[20px] whitespace-nowrap bg-[#f0f0f0]  text-black/60 focus:font-[500] focus:bg-black  focus:text-white transition duration-200'>
                <p className='font-Satoshi font-[400] text-[16px]'>X-Large</p>
              </button> */}
            </div>
          </div>

          <div className="divider mt-1 mb-1"></div>

          {/**plus minus button*/}
          <div className='flex flex-row justify-between mt-1'>
            <div className='w-[170px] h-[52px] py-[16px] px-[20px] rounded-[62px] bg-[#F0F0F0]
              flex flex-row justify-between items-center'>
              {/**Ye React ko batata hai ke cartitem state change ho gayi, aur ab 
                 * naye quantity ke sath UI dobara render kare */}
              {/* onClick={() => setcartitem({ ...cartitem, quantity: cartitem.quantity <= 1 ? 1 : --cartitem.quantity })} */}
              <button>
                <Minus color="black" size={18} />
              </button>
              <p className='font-Satoshi font-[500] text-[16px] text-black'>1</p>
              {/* onClick={() => setcartitem({ ...cartitem, quantity: cartitem.quantity + 1 })} */}
              <button className=''>
                <Plus color="black" size={18} />
              </button>
            </div>

            {/**Add to car button */}
            <button className='w-[400px] h-[52px] rounded-[62px] px-[54px] py-[16px]
             bg-black flex flex-row justify-center items-center gap-[12px]'>
              <p className='font-Satoshi font-[500] text-[16px] text-white'>Add to Cart</p>
            </button>
            <div>

            </div>
          </div>
        </div>
      </div>
      
      
<div className='w-[1240px] mx-auto mt-[70px] '>
{/**section 2 */}

<div className='w-[1050px] flex flex-row justify-between mx-auto'>
  <button className=' font-[400] text-[20px] text-black/60 focus:font-[500] focus:text-black'>
    <p className='font-Satoshi'>Product Details</p>
  </button>
  <button className='font-[400] text-[20px] text-black/60 focus:font-[500] focus:text-black'>
    <p className='font-Satoshi '>Rating & Reviews</p>
  </button>
  <button className='font-[400] text-[20px] text-black/60 focus:font-[500] focus:text-black'>
    <p className='font-Satoshi '>FAQs</p>
  </button>
</div>


<div className="divider mt-[4px]"></div>

<div className='w-[1240px] flex flex-row justify-between'>
  <div className='flex flex-row items-center gap-[4px]'>
    <p className='font-Satoshi font-[700] text-[24px]'>All Reviews</p>
    <p className='font-Satoshi font-[400] text-[16px] text-black/60'>(451)</p>
  </div>

  <div className='w-[354px] h-[48px] flex flex-row justify-between'>
    <button className='w-[48px] h-[48px] rounded-[62px] py-[16px] px-[20px]
    bg-[#F0F0F0] flex flex-row justify-center items-center'>
      <Filterblackicon />
    </button>
    <button className='w-[120px] h-[48px] rounded-[62px] py-[16px] px-[20px]
    bg-[#F0F0F0] flex flex-row gap-[12px] justify-center items-center'>
      <p className='font-Satoshi font-[500] text-[16px]'>Latest</p>
      <Downarrow />
    </button>

    <button className='w-[166px] h-[48px] rounded-[62px] py-[16px] px-[20px]
    bg-black flex flex-row  justify-center items-center'>
      <p className='font-Satoshi font-[500] text-[16px] text-white'>Write a review</p>
      <Downarrow />
    </button>
  </div>
</div>
</div>

<div className='w-[1240px] mx-auto grid grid-cols-2 gap-[16px] relative'>
{/**1st div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[127px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratinghalf />
      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[146px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Samantha D.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&#39;s become my favorite go-to shirt."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 14, 2023</p>
</div>
{/**2nd div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[109px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />

      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[97px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Alex M.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&#39;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 15, 2023</p>
</div>

{/**third div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[97px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratinghalf />
      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[106px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Ethan R.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&#39;s touch in every aspect of this shirt."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 16, 2023</p>
</div>

{/**4th div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[109px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[103px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Olivia P.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&#39;s evident that the designer poured their creativity into making this t-shirt stand out."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 17, 2023</p>
</div>

{/**fidth div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[109px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[98px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Liam K.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&#39;s skill. It&#39;s like wearing a piece of art that reflects my passion for both design and fashion."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 18, 2023</p>
</div>

{/**sixth div*/}
<div className='w-[610px] h-[241px] px-[32px] py-[28px] border-[1px]
 border-black/10 rounded-[20px] flex flex-col justify-between mt-[24px] relative'>
  <div className='w-[546px] h-[140px] flex flex-col justify-between'>
    <div className='w-[546px] flex flex-row justify-between items-center'>
      <div className='w-[127px] h-[22.58px] flex flex-row justify-between'>
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratingtwo />
        <Ratinghalf />
      </div>
      <Elipseslug />
    </div>
    <div className='w-[522px] h-[102px] flex flex-col justify-between'>
      <div className='w-[89px] h-[24px] flex flex-row justify-between items-center'>
        <p className='font-Satoshi font-[700] text-[20px] text-black'>Ava H.</p>
        <Greentick />
      </div>
      <p className='font-Satoshi font-[400] text-[16px] text-black/60'>"I&#39;m not just wearing a t-shirt; I&#39;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
    </div>

  </div>
  <p className='font-Satoshi font-[500] text-[16px] text-black/60'>Posted on August 19, 20233</p>
</div>

<div className='w-[1240px] flex flex-row justify-center items-center'>
  <button className='w-[230px] h-[52px] border-[1px] border-black/10 rounded-[62px] py-[16px] px-[54px]
    flex flex-row justify-center items-center bg-white mt-2'>
    <p className=' font-Satoshi font-[500] text-[16px] text-black whitespace-nowrap'>Load More Reviews</p>
  </button>
</div>

</div>

{/** */}
<div className='w-[579px] h-[58px] flex justify-center items-center mx-auto mt-16'>
<p className='font-Integral font-[700] text-[48px] text-black uppercase'>You might also like</p>
</div>

<div className='w-[1240px] h-[413px] mx-auto mt-[70px] flex flex-row justify-between'>
{specific.map((item:any, i:number) => {
  return (
    <div key={i}>
      <Link href={`/${item.category}/${item.slug}`}>
        <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center overflow-hidden">
          <Image
            src={item.imageUrl}
            alt="shirt"
            width={296}
            height={444}
          />
        </div>
      </Link>
      <div className="w-[295px] h-[98px] flex flex-col justify-between">
        <p className="font-Satoshi font-[700] text-[20px] text-black capitalize">
          {item.title}
        </p>

        <div className="max-w-[160px] h-[19px] flex flex-row gap-[13px] items-center">
          <div className="max-w-[113px] h-[18.49px] flex flex-row gap-[5.31px]">
            {/**logic lagai hai jo rating kee base pay stars generate kray gee ratibg mtlb 2 3 4 5 */}
            {Array.from({ length: Math.floor(item.rating) }).map(
              (_, i) => (
                <Pricestar />
              )
            )}

            {item.rating % 1 !== 0 && <Halfstar />} {/** */}
          </div>

          <p className="font-Satoshi font-[400] text-[16px] text-black">
            {item.rating}
            <span className="font-Satoshi font-[400] text-[16px] text-[#666666]">
              /5
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {/**discounted price */}
          {item.discountpercent > 0 && (
            <p
              className="font-Satoshi font-[700] text-[24px]
                  text-black"
            >
              ${item.price - (item.price * item.discountpercent) / 100}
            </p>
          )}
          {/**original price*/}
          <p
            className={`font-Satoshi font-[700] text-[24px] 
                 ${item.discountpercent > 0
                ? "line-through decoration-2 decoration-[#666666] text-[#666666]"
                : "text-black"
              }`}
          >
            ${item.price}
          </p>

          {/**discount show in percentage */}
          {
            item.discountpercent > 0 && <div
              className="w-[58px] h-[28px] rounded-[62px]
             flex justify-center items-center py-[6px] px-[14px] bg-red-500 bg-opacity-10">
              <p className="text-[#FF3333] font-Satoshi text-[12px] font-[500]">
                -{item.discountpercent}%
              </p>
            </div>
          }
        </div>
      </div>

    </div>
  );
})}

</div>


    </div>
  )
}

export default Slug
