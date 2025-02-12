import { defineType } from "sanity";

export default defineType({
  name: "customer",
  type: "document",
  title: "Customers",
  fields: [
    { name: "firstname", type: "string", title: "First Name" },
    { name: "lastname", type: "string", title: "Last Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone" }, 
    { name: "city", type: "string", title: "City" }, 
    { name: "address", type: "string", title: "Address" },
    { name: "zipcode", type: "string", title: "Zip Code" },
  ],
});

//phone kee string type isliye takay leading 0 na remove hoo qynke number rakhnay say number ka first
//zero remove hojata hai or dosra international fromat main number plus +92 say start hota hai
//agar type number rakhta tw + ghaib hojata or third reson yeh kay kuch numbers main alphabets hota.