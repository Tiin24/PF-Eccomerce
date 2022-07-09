import "./App.module.css"
import Home from "./components/home/Home.jsx"
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import CreateProduct from "./components/createProduct/CreateProduct"
import ProductDetail from "./components/productDetail/ProductDetail"
import StorePage from "./components/storePage/StorePage"
import WeAre from "./components/weAre/WeAre"
import Page404 from "./components/page404/Page404"
import ProductsCategory from "./components/productsCategories/ProdutsCategory"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/tienda" component={StorePage}/> 
          <Route path="/tienda/:producto" component={ProductDetail}/>
          <Route path="/categoria/:category" component={ProductsCategory}/>
          <Route path="/crearproducto" component={CreateProduct}/> 
          <Route path="/nosotros" component={WeAre}/>
          <Route exact path="/create" component={CreateProduct}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
