'use client'

import { ProductType } from '@/interfaces';
import React, { FC } from 'react'

const Product: FC<{product: ProductType}> = ({product}) => {
    console.log(product);
    
  return (
    <div>Product</div>
  )
}

export default Product;