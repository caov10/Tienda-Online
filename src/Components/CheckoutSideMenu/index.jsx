import {  XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Contex";
import OrderCard from "../OrderCard/"
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
 
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id)
      context.setCartProducts(filteredProducts);
  }
  const handleCheckout = () => {
   const orderToAdd={
    date: new Date(),
    products: context.cartProducts,
    totalProducts: context.cartProducts.length,
    totalPrice: totalPrice(context.cartProducts)
   }
   context.setOrder([...context.order, orderToAdd])
   context.setCartProducts([])
   context.setSearchByTitle(event.target.value)
    //context.closeCheckoutSideMenu()
  }
  

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu   flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black-500 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll  flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6  mb-6">
        <p className="flex justify-between items-center mt-5 ">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            {totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            onClick={() => handleCheckout()}
            className="bg-black text-white w-full rounded-lg py-3 mt-5"
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
