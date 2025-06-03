import { useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from "../../Contex"
import Home from "../Home"
import MyOrder from "../MyOrder"
import MyAccount from "../MyAccount"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import MyOrders from '../MyOrders'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import "./App.css";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyOrder /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);
  return routes
}
const App = ()=> {

  return (
  <ShoppingCartProvider>
     <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
        {/* <ProductDetail /> */}
      </BrowserRouter>
  </ShoppingCartProvider> 
  );
}

export default App
