import ProductContainer from '@components/ProductPage/ProductContainer';
import ProductNavbar from '@components/ProductPage/ProductNavbar';
import React from 'react'

async function fetchProducts(){
  const productsResponse = await fetch("https://fakestoreapi.com/products",{
    // cache: 'no-store'
  });
  
  return productsResponse.json();
}

async function Products() {
  const products= await fetchProducts();
  console.log(products.length,'hello');
  return (
    <>
        <ProductNavbar data={products}/>
        <ProductContainer data={products}/>

    </>
  )
}

export default Products