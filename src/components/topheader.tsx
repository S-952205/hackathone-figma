import Link from "next/link";
import Headervector from "./headervector";

const Topheader = () => {
  return (
    <div>
     <header className="h-[48px] flex justify-center items-center
    bg-black mx-auto relative">

     {/**Header Child div containing text*/}   
    <div className="h-[19px] flex items-center mx-auto">
      <p className="text-white font-Satoshi font-[400] text-[14px]">
        Sign up and get 20% off to your first order.
        <Link href={''}>
         <span className="font-Satoshi font-[500] text-[16px] underline underline-offset-4 decoration-skip-ink-none text-white ml-2">
          Sign Up Now
         </span>
        </Link>
      </p>
    </div>

    {/* X Vector */}
    <div className="w-[20px] h-[20px] flex justify-center items-center
     absolute top-[13px] left-[1320px] text-bold">
      <Link href={''}>
       <Headervector/>
      </Link>
    </div>
  </header>
</div>
  );
};

export default Topheader;
