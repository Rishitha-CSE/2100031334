import React from 'react'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Update this line 
 
import AllProductsPage from './pages/AllProductsPage'; 
import ProductPage from './pages/ProductPage'; 
 
function App() { 
  return ( 
    <Router> 
      <div className="App"> 
        <Routes> 
          <Route path="/" exact component={AllProductsPage} /> 
          <Route path="/product/:productId" component={ProductPage} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
export default App