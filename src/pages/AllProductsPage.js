// AllProductsPage.js 
import React, { useState, useEffect } from 'react'; 
import ProductList from '../components/ProductList'; 
import ApiService from '../services/ApiService'; 
 
function AllProductsPage() { 
  const [products, setProducts] = useState([]); 
 
  useEffect(() => { 
    fetchProducts(); 
  }, []); 
 
  const fetchProducts = async () => { 
    try { 
      const response = await ApiService.getProducts(); 
      setProducts(response.data); 
    } catch (error) { 
      console.error('Error fetching products:', error); 
    } 
  }; 
 
  return ( 
    <div> 
      <h1>All Products</h1> 
      <ProductList products={products} /> 
    </div> 
  ); 
} 
 
export default AllProductsPage;