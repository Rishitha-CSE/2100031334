// ProductList.js 
import React from 'react'; 
 
function ProductList({ products }) { 
  return ( 
    <div className="product-list"> 
      {products.map((product, index) => ( 
        <div key={index} className="product"> 
          <h3>{product.productName}</h3> 
          <p>Price: {product.price}</p> 
          <p>Rating: {product.rating}</p> 
          <p>Discount: {product.discount}</p> 
          <p>Availability: {product.availability}</p> 
        </div> 
      ))} 
    </div> 
  ); 
} 
 
export default ProductList;