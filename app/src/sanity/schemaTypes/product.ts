import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name:"description",
            type:"text",
             title:"Description",
        },
        {
          name : "slug",
          type : "slug",
          title : "slug",
          options : {
              source : "title",
          }
      },
    
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
       
      },
        
        {
            name: "productImage",
            title: "Product Image",
            type: "image",
            options: {
              hotspot: true,
            }
          },
          
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }, 
        {
            name:"Ourproduct",
            type:"boolean",
            title:"Our product",
        },
    
        {
            name: "image",
            type: "image",
            title: "Product Image",
            options: {
              hotspot: true, // Optional: for image cropping
            },
          },
          
          
    ]
})

