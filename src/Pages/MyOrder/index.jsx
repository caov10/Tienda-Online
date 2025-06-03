import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Contex";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard/";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if(index === "last") index = context.order?.length - 1;
 
  return (
    <Layout>
      <div className="flex items-center  relative justify-center w-80 mb-5">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </Link>

        <h1> My Orders</h1>
      </div>
      <div className="px-6 w-80 mx-auto ">
        {
        context.order?.[index]?.products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
