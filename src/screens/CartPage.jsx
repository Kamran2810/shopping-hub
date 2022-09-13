import React from "react";
import { Button, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import { FaStar } from "react-icons/fa";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {

  const { isEmpty, totalItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  if (isEmpty) return (
    <>
      <Typography variant="h2" className="text-center uppercase shadow-2xl">
        Cart
      </Typography>
      <Typography variant='h4'className="text-center p-10 mb-auto">Your cart is empty</Typography>
    </>
  );
  return (
    <div>
      <Typography variant="h2" className="text-center uppercase shadow-2xl">
        Cart
      </Typography>
      <Typography variant="h6" className="underline text-center p-4">
        Items in Your Cart : {totalItems}
      </Typography>

      <div className="flex m-5 sm:flex-col md:flex-col">
        <div className="flex flex-1 flex-col">
          {items.map((item) => (
            <div className="flex w-[100%] h-[200px] items-center p-5 border-2">
              <div className="flex self-start">
                <img
                  className="w-[8rem] h-[175px] rounded-lg shadow-xl hover:scale-[1.1] ease-in duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="ml-5 mt-2 h-auto justify-between flex flex-col">
                  <Typography>
                    <b>Product Name :</b> {item.title}
                  </Typography>
                  <Typography className="flex">
                    <b>Rating :</b>{" "}
                    {[...Array(item.rating)].map((idx) => (
                      <FaStar
                        id={idx + 1}
                        key={idx}
                        style={{ marginTop: "5px", marginLeft: "10px" }}
                      />
                    ))}
                  </Typography>
                  <Typography>
                    <b>Price : </b>&ensp;
                    <b>{parseInt(item.price).toLocaleString()} &#8377; /-</b>
                  </Typography>

                  <div className="flex mb-5 text-xl">
                    <Typography>
                      <b>Quantity : </b>
                    </Typography>
                    <div className="ml-5 shadow-md flex">
                      <button
                        className="bg-[#171614] text-white w-10 flex items-center justify-center cursor-pointer rounded-l-md"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <div className="w-10 flex items-center justify-center border-[1px] border-[#171614]">
                        {item.quantity}
                      </div>

                      <button
                        className="bg-[#171614] text-white w-10 flex items-center justify-center cursor-pointer rounded-r-md"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-auto ">
                <div className="pl-4 text-2xl text-center sm:pl-0 md:pl-0 md:flex-2 ">
                  <b>SubTotal : </b> ₹
                  {parseInt(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
              <div className="flex  ">
                <DeleteIcon onClick={() => removeItem(item.id)} />
              </div>
            </div>
          ))}

          <hr className="mt-4 mb-4 " />
        </div>

        <div className="flex flex-[0.3] ml-5 w-auto h-[30vh] shadow-2xl border-[#171614] border-2 rounded-xl items-center justify-center sticky top-[5vh] sm:p-2 md:p-2">
          <div className="flex flex-col h-auto justify-around">
            <Typography variant="h5">
              <b>Total Amount : </b>
            </Typography>
            <Typography variant="h5">
              <div className="text-2xl text-center mt-3 mb-3">
                {" "}
                ₹ {parseInt(cartTotal).toLocaleString()}{" "}
              </div>
            </Typography>
            <Button variant="contained">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
