import React from 'react'
import { categoriesdata } from '../../data/Categories'
import CategoryCard from './CategoryCard'

const ProductCard = () => {
  return (
    <>
      {categoriesdata.map((x, index)=>(
        <div key={index}>
        <CategoryCard x={x}/>
        </div>
      )
    )}
    </>
  )
}

export default ProductCard