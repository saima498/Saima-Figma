export interface Product {
  name: string;
  image: string;
    stockLevel: number;
    imageUrl: string;
    _id : string;
    title: string;
    _type: 'document',
   price: "number",
    productImage: {
      _type: 'image',
      asset: {
        _ref: "imageId",
      },
      slug:{
        _type:"slug",
        current: string,
      },
    },
    
}

  