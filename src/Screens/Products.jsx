import React from 'react'
import { useParams } from 'react-router-dom'
import { categoriesdata } from '../data/Categories'
import ProductBanner from '../Components/Ui/ProductBanner'

const Products = () => {
const {name} = useParams()

let oneProduct = categoriesdata.find((x) => x.name === name)

  return (
    <>
      <ProductBanner item={oneProduct}/>
    </>
  )
}

export default Products
