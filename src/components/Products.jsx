import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";

const Products = () => {
  //   const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: Products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch(`https://fakestoreapi.com/products`);
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Products.map((product) => {
          return (
            <div key={product.id} style={{ width: "50%" }}>
              <img src={product.image} height="150px" alt="" />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Products;
