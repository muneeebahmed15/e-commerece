import React from 'react'
import CategoryCard from './CategoryCard'
import { GameData } from '../../data/GameData'

const ProductCard = () => {
  return (
    <>
      {GameData.map((x, index)=>(
        <div key={index}>
        <CategoryCard x={x}/>
        </div>
      )
    )}
    </>
  )
}

export default ProductCard