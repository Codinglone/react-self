import React, { useState } from "react";

const ProductsContext = React.createContext();

export const ContextProvider = ({ children }) => {
    let resArray = [];

    const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(response => resArray.push(response))
  const [products, SetProducts] = useState(resArray);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
