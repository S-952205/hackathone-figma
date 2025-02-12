// ? option isliye qynke zrori nhi kay sb products ka discount price hoo jokay discount percent say
//hota hai mjhe landing page pay eik product ka basic info dikhana tw uskay liye mazin size color
//ko optional krskta hoon qynke mjhe alnding page pay size color tw nhi dikhana agar optional nhi kiya
//tw error ayga kay required hai or mjhe dena hee pray ga isliye susay option krskta kay yeh hobhee skta
//agar nhi hai tw koi issue nhi error nhi ayga usko detail page pay dikhadonga.

export type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  discountprice?: number;
  discountpercent?: number;
  slug: string;
  category: string;
  size?: string[];
  color?: string[];
  quantity: number;
};

// Simplified Slug Type
type Slug = {
  current: string; // e.g., "casual-green-bomber-jacket"
};

// Simplified Image Type
type Image = {
  asset: {
    _ref: string; // e.g., "image-4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296-png"
  };
};
