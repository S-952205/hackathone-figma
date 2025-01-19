import axios from 'axios';
import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'pn92i3xb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skGWMsyp0ZbiEPgfqma2Ig6EmVVph5d2E7YGBxiVj2H3LNNf4zzcukpyLdS5AkYOMJZVpKlI0w03HHqCuTvdhN2TwFK3fLuailFlFklsmsYntcGTbzdWPOrqa4HNbFW8Z9in85mB4zHXYbgHCmITxlpXtPr4e3srI9TiRMl28pLQp79MrA4a',
});



async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        title: product.name,
        description: product.description,
        price: product.price,
        discountprice: 0,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        slug: {
            _type: 'slug',
            current: product.name.toLowerCase().replace(/\s+/g, '-'),
          },          
        category: product.category,
        discountpercent: product.discountPercent,
        color: product.colors,
        size: product.sizes,
        rating: product.rating || 0,
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