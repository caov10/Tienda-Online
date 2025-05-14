import { useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from "../../Contex"
import Home from "../Home"
import MyOrder from "../MyOrder"
import MyAccount from "../MyAccount"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import MyOrders from '../MyOrders'
import Navbar from '../../Components/Navbar'
import "./App.css";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-Order", element: <MyOrder /> },
    { path: "/my-Orders", element: <MyOrders /> },
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
      </BrowserRouter>
  </ShoppingCartProvider> 
  );
}

export default App
