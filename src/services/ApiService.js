// ApiService.js 
import axios from 'axios'; 
 
const BASE_URL = 'http://20.244.56.144/test'; 
 
const ApiService = { 
  getProducts: async () => { 
    try { 
      const response = await axios.get(`${BASE_URL}/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`); 
      return response.data; 
    } catch (error) { 
      throw error; 
    } 
  }, 
 
  getProductById: async (productId) => { 
    try { 
      const response = await axios.get(`${BASE_URL}/products/${productId}`); 
      return response.data; 
    } catch (error) { 
      throw error; 
    } 
  } 
}; 
 
export default ApiService;