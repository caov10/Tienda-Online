import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Contex";

function Home() {
const  context= useContext(ShoppingCartContext)

const renderView = () => {

    if(context.filteredItems?.length > 0){
      return (
         context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ))
    )
    }else{
      return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md text-center">
          We don't have anything
        </div>
      );

    }
   
  }


       
  return (
    <Layout>
      <div className="flex items-center justify-center  relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
<input
 type="text" 
 placeholder="Search a product"
 className="rounded-lg border border-gray-300 p-2 mb-4 w-full max-w-md mx-auto"
 onChange={(event) => context.setSearchByTitle(event.target.value)}
 />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg ">
      {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
