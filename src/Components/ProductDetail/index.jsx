import {  XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Contex";
import "./styles.css";
const ProductDetails = () => {
  const context = useContext(ShoppingCartContext)
 

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded`}>
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon 
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => context.closeProductDetail()}
           />
        </div>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" 
        src={context.productToShow.images}
        alt={context.productToShow.title}
        />
      </figure>
      <p  className="flex flex-col  p-6">
        <span className="font-medium text-2xl mb-2" >${context.productToShow.price}</span>
        <span className="font-medium text-md">${context.productToShow.title}</span>
        <span className="font-light text-sm" >${context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetails;
