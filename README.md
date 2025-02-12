Project Overview

This project is an E-Commerce Marketplace Website designed to provide users with an easy-to-use platform for browsing and purchasing affordable clothing with free delivery. The website is built using Next.js for the front end and Sanity CMS for managing backend content and third-party Api's.

The development process followed a structured approach, with new features being implemented day by day to create a fully functional e-commerce platform.

(Development Process )

Day 1: Schema Design & Business Goal 
------------------------------------

1:Defined the business goal: The website focuses on affordable clothing, free delivery, and accessibility for all age groups.

2: Designed the database schema:
  - Products: Stores details of available products.
  - Orders: Manages customer orders.
  - Order Items: Contains individual items within an order.
  - Customers: Stores customer information.
  - Delivery Zones: Defines delivery areas and shipping details.
  - Created a basic Next.js frontend structure.

Day 2: System Architecture Planning
-----------------------------------

1: Planned the system architecture:
  - Frontend: Next.js (React framework)
  - Backend: Sanity CMS for content management
  - Third-party APIs: Planned for future payment integration & shipment tracking

2: Defined the user journey:
  - Users can browse products
  - Place an order
  - Track their orders using shipment APIs (not implemented yet)

Day 3: Backend Development - Data Migration Api to Sanity
------------------------------------------------

- Created a script file to fetch product data from an external API and insert it into Sanity CMS.
- Designed schemas in Sanity based on the product data structure.
- Managed and mapped API-fetched products according to the defined schemas.
- Successfully stored and structured product data within Sanity CMS.

Day 4: Frontend Development & Dynamic Components
------------------------------------------------

1: Created key frontend components:
   - Product Listing Page
   - Product Details Page
   - Cart Page
   - Checkout Page
- Integrated Sanity CMS API to dynamically fetch data.
- Implemented Redux Toolkit for cart management.
- After checkout, stored order and customer data in Sanity CMS.
- Features like search, pagination, and filters are pending for future updates.

Day 5: Functional Testing & Performance Optimization
----------------------------------------------------

- Conducted functional testing to validate key features of the platform.
- Verified product listing, cart functionality, checkout process, and API handling.
- Identified and resolved minor bugs affecting data fetching and order processing.
- Used Lighthouse tools to analyze performance and optimize the website for better speed and efficiency.

Day 6: Deployment Process
-------------------------

- Pushed code to GitHub for version control.
- Deployed the project on Vercel.
- Encountered a CORS issue where products were not displaying on the deployed link.
      - Solution: Added the deployed Vercel link in the CORS settings of Sanity Studio.
      - After this, the products successfully appeared on the live website.

- Managed Environment Variables:
      - Stored all API keys and secrets in the .env.local file.
      - Configured the same environment variables in the Vercel dashboard for a smooth deployment.


Conclusion

This project was developed step by step, focusing on building a scalable and functional E-Commerce Marketplace Website. From designing the schema and setting up the system architecture to frontend & backend integration, testing, and deployment, the project successfully achieved a working e-commerce prototype.

 -- Future improvements include:
    Adding search functionality, filters, and pagination
    Implementing user authentication (login/signup)
    Integrating a payment gateway & shipment tracking API
    Enhancing website performance & mobile responsiveness

This structured development approach ensured a smooth workflow, resolving challenges like CORS issues and API errors, and successfully deploying the project on Vercel.