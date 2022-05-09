import React from 'react'
import { useSelector } from 'react-redux'

export const Products = () => {
    const allProducts = useSelector((state)=>state.products);
    console.log(allProducts)
  return (
    <div>Products</div>
  )
}
