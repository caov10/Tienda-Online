import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Contex";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard/";
function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Order
      <div className="px-6 w-80 mx-auto">
        {context.order?.slice(-1)[0].products.map((product) => (
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
