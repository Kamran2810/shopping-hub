import React from "react";
import { Badge, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const style = "pl-[20px] cursor-pointer";
  const { totalItems } = useCart();

  return (
    <div className="navbar h-[60px] shadow-md relative z-10 bg-[#171614] text-white">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center sm:pl-0 sm:pr-0">
        <Link to="/">
          <div className="left flex items-center">
            <div className="logo cursor-pointer">
              <img
                src="./android-chrome-192x192.png"
                style={{ width: "40px" }}
                alt="logo"
              />
            </div>
            <div className="pl-[20px] font-bold text-center sm:hidden">
              <Typography>Shopping Hub</Typography>
            </div>
          </div>
        </Link>

        <div className="center flex  items-center">
          <Link to="/clothing">
            <Typography className="pl-[20px] font-bold text-center ">
              Clothing
            </Typography>
          </Link>
          <Link to="/electronics">
            <Typography className="pl-[20px] font-bold text-center">
              Electronics
            </Typography>
          </Link>
          <Link to="/toys">
            <Typography className="pl-[20px] font-bold text-center">
              Toys
            </Typography>
          </Link>
        </div>

        <div className="right flex items-center justify-end sm:flex-2 ">
          <Link to="/signin">
            <Button variant="contained">SignIn</Button>
          </Link>
          <Link to="/signup">
            <Button variant="contained" sx={{ marginLeft: "20px" }}>
              SignUp
            </Button>
          </Link>
          <Link to="/cart">
            <Badge badgeContent={totalItems} color="primary" className={style}>
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
