import axios from 'axios'; //axios ek library hai jo API se data nikalne ke liye use hoti hai.
import { createClient } from '@sanity/client';  //createClient function Sanity ka client banata hai, jisse hum Sanity database ke andar likh sakain.


//initializes the connection to your Sanity project using the configuration settings.
const client = createClient({
  projectId: 'pn92i3xb',
  dataset: 'production',
  useCdn: true,  // This makes queries faster by using Sanity's CDN (Content Delivery Network).
  apiVersion: '2025-01-13',
  token: 'skGWMsyp0ZbiEPgfqma2Ig6EmVVph5d2E7YGBxiVj2H3LNNf4zzcukpyLdS5AkYOMJZVpKlI0w03HHqCuTvdhN2TwFK3fLuailFlFklsmsYntcGTbzdWPOrqa4HNbFW8Z9in85mB4zHXYbgHCmITxlpXtPr4e3srI9TiRMl28pLQp79MrA4a',
});

/**token ek secret key hai jo humein Sanity me data likhne ka permission deta hai. */

//Ye function ek image ka URL leta hai aur usko Sanity me upload karta hai.
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl); //Image ko download karta hai
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    
    /*Jab hum image upload karte hain, toh hum usko buffer me convert
     * karke Sanity ya kisi bhi database pe bhejte hain.*/
    const buffer = await response.arrayBuffer();//Image ko binary format me change karta hai
    const bufferImage = Buffer.from(buffer);//Image ko uploadable format me convert karta hai

    // Image ko Sanity pe bhejta hai
    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id; // Image ka Sanity ID wapis return karta hai
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;// If an error occurs, return null.
  }
}

/**Pehle image upload karta hai aur uski ID store karta hai. Phir ek Sanity ka product document banata hai.
Agar image upload fail ho jaye, toh product upload nahi karega. 
yeh function meri product info sanity database main save krta hai*/
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl); // Upload image and get its ID.

    if (imageId) {
      const document = {
        _type: 'products',   // Sanity schema type (must match schema in Sanity).
        title: product.name,
        description: product.description,
        price: product.price,
        discountprice: 0, // Assuming no discount for now.
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,  // Link the uploaded image using its asset ID.
          },
        },
        slug: {
            _type: 'slug',
            current: product.name.toLowerCase().replace(/\s+/g, '-'), // Create a URL-friendly slug from product name.
          },          
        category: product.category,
        discountpercent: product.discountPercent,
        color: product.colors,
        size: product.sizes,
        rating: product.rating || 0, // Default rating of 0 if not provided.
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

/**API se product list fetch karta hai Loop chalata hai aur har product ko uploadProduct() me bhejta hai
Agar koi error aaye toh usko console me dikhata hai */
async function importProducts() {
  try {
    const response = await axios.get('https://template1-neon-nu.vercel.app/api/products');

    // Axios automatically parses the response as JSON, no need for .json()
    const products = response.data;

    // Log the products to check the structure
    console.log('Fetched Products:', products);

    // Loop through each product and upload it
    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


// importProducts();