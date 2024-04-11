interface ProductDetails {
    name: string;
    price: number;
  }
  
  interface ProductOptions {
    availableSizes: string[];
    isOnSale: boolean;
  }
  
  type FullProductInfo = ProductDetails & ProductOptions;
  
  function mergeProductData(details: ProductDetails, options: ProductOptions): FullProductInfo {
    return { ...details, ...options };
  }
  
  const productDetails: ProductDetails = { name: "Oneoshirt", price: 300000 };
  const productOptions: ProductOptions = { availableSizes: ["S", "M", "L"], isOnSale: true };
  
  const fullProductInfo = mergeProductData(productDetails, productOptions);
  console.log(fullProductInfo);
  