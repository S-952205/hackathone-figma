import { defineType } from "sanity";

// product.js (Single Schema)
export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Use 'image' type instead of array
        options: {
          hotspot: true
        },
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'discountprice',
        title: 'Discount Price',
        type: 'number',
        description: 'Price after applying any discount',
      },
      {
        name: 'discountpercent',
        title: 'DiscountPercent',
        type: 'number'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text', // For Detail Page
        description: 'A detailed description of the product'
      },
      {
        name: 'color',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Available color options'
      },
      {
        name: 'size',
        title: 'Sizes',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Available size options'
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        description: 'Stock quantity'
      }
    ]
  })
  