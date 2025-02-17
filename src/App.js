import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";

// 從 page 中匯入 Article, ArticleDetail 元件
import Articles from './pages/Article';
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="article" element={<Articles />}  />
        <Route path="article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
