import React, { useContext } from "react";
import ProductsContext from "../ProductsContext";

const Products = () => {
  const products = useContext(ProductsContext);
    const real = products[0];
  return (
    <>
        {real.map((product) => (
            <div key={product.userId}><b>Title</b>: {product.title}, <br /> <b>Body</b> : {product.body}, <br /> <b>User</b>: {product.userId}</div>
        ))}
    </>
    );
};

export default Products;
