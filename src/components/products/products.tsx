import React from 'react'
import { Product } from '../../shared/interfaces/Product';
import ProductItem from '../product/product';
import { removeProduct } from '../../shared/functions/removeProduct';
import { getItems } from '../../shared/functions/localStorageFunctions';

const Products = ({products, data }:any) => { 
  const handleRemoveProduct = (id:number) =>{
    removeProduct(id)
    data(getItems())
  } 
  return (
    <div className='row justify-content-between align-items-stretch'>
      {products.map((item :Product)=>{
        return (
          <div key={item.id} className='col-12 col-md-6 col-lg-3 my-3'>
            <ProductItem productData={item} selectedProduct = {handleRemoveProduct}/>
          </div>
        )
      })
      }
    </div>
  )
}

export default Products