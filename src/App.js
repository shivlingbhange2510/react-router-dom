
import './App.css';
import { Home } from './ReactRouter/Home'
import { ProductDetails } from './ReactRouter/ProductDetails'
import { Product } from './ReactRouter/Product'
import { Navbar } from './ReactRouter/Navbar';
import { PageNotFound} from './ReactRouter/PageNotFound'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="Ap1p">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>} /> 
        <Route path={'/product'} element={ <Product/> } />
        <Route path={'/products/:id'} element={ <ProductDetails/> } />
        <Route path={'/*'} element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
