import Link from "next/link";
import Headervector from "./headervector";

const Topheader = () => {
  return (
     <header className="w-[100%] h-[48px] flex justify-center items-center
    bg-black mx-auto ">

     {/**Header Child div containing text*/}   
    <div className="flex items-center justify-between mx-auto relative">
      
      <p className="text-white font-Satoshi font-[400] text-[14px]">
        Sign up and get 20% off to your first order.
        <Link href={''}>
         <span className="font-Satoshi font-[500] text-[16px] underline underline-offset-4
          decoration-skip-ink-none text-white ml-2">
          Sign Up Now
         </span>
        </Link>
      </p>
    {/* X Vector */}
    <div className="w-[20px] h-[20px] flex justify-center items-center
      text-bold absolute left-[780px]">
      <Link href={''}>
       <Headervector/>
      </Link>
    </div>
    </div>

  </header>
  );
};

export default Topheader;
