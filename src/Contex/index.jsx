import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider= ({ children }) => {
          const [count, setCount] = useState(0)


          const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
          const openProductDetail = () => setIsProductDetailOpen(true);
          const closeProductDetail = () => setIsProductDetailOpen(false);


          const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
          const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true);
          const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false);


          //ProductDetail
           const [productToShow, setProductToShow] = useState({});
           const [cartProducts, setCartProducts] = useState([]);


           //shopping cart 
           const [order,setOrder]= useState([]);
           

          return (
            <ShoppingCartContext.Provider value={{
               count,
                setCount,
                 openProductDetail,
                  closeProductDetail,
                isProductDetailOpen,
                 productToShow, 
                 setProductToShow,
                  cartProducts, 
                  setCartProducts,
                  isCheckoutSideMenuOpen,
                  openCheckoutSideMenu,
                  closeCheckoutSideMenu,
                  order,
                  setOrder,
                
                 
                  }}>
              {children}
            </ShoppingCartContext.Provider>
          )
}