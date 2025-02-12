import { defineField } from "sanity";

export default defineField({
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    {
      name: "customer", // Customer field (reference type) → Iska matlab ye hai ke har order ek customer se link hoga.
      type: "reference",
      to: [{ type: "customer" }],
      title: "Customer",
    },
    {
      name: "products", //Products field (array type) → Ek order me multiple products ho sakte hain.
      type: "array",
      title: "Products",
      of: [
        {
          type: "object", //Har Product Ek Object Ha
          fields: [
            { name: "productName", type: "string", title: "Product Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "color", type: "string", title: "Color" },
            { name: "size", type: "string", title: "Size" },
            { name: "quantity", type: "number", title: "Quantity" },
          ],
          
        },
      ],
    },
    { //Total Amount aur Order Date bhi store kar rahe hain.
      name: "total",
      type: "number",
      title: "Total Amount",
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Total Discount'
    },
    {
      name: "orderDate",
      type: "datetime",
      title: "Order Date",
      initialValue: () => new Date().toISOString(),
    },
  ],
});
