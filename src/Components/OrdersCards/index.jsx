const fechaActual = new Date().toLocaleDateString();
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCards = (props) => {
          const { totalPrice, totalProducts } = props;

          return (
                    <div className="flex justify-between items-center mb-3 border border-black rounded-lg  p-4 w-80  mb-4 ">
                              <div className="flex justify-between ">
                                        <p className="flex flex-col w-full">
                                                  <span className="font-light">
                                                            {fechaActual}
                                                  </span>
                                                  <span className="font-light">
                                                            {totalProducts}{ " "}
                                                            articles
                                                  </span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                                  <span className="font-medium text-2xl">
                                                            ${totalPrice} USD
                                                  </span>
                                                  <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
                                        </p>
                              </div>
                    </div>
          );
};
export default OrdersCards;
