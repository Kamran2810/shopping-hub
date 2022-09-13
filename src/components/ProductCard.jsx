import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { useCart } from "react-use-cart";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};


const ProductCard = ({ item }) => {
  const { id, image, title, price, rating } = item;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addItem } = useCart();

  return (
    <>
      <Card
        sx={{
          maxWidth: 325,
          maxHeight: 400,
          borderRadius: 5,
          p: 2,
          m: 3,
          boxShadow: "0px 0px 20px black",
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ height: 200 }}
          onClick={handleOpen}
          key={ id}
        />
        <CardContent onClick={handleOpen}>
          <Typography gutterBottom variant="h6">
            {item.title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            Price : &ensp;
            <b>{parseInt(price).toLocaleString()} &#8377; /-</b>
          </Typography>
        </CardContent>
        <CardActions className="flex flex-1 justify-center items-center">
          <Button variant="contained" onClick={() => addItem(item)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex ">
            <div className="flex-1">
              <img src={image} sx={{ width: "100%" }} alt={title}></img>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center m-2 p-2">
              <Typography variant="h6" className="p-2">
                {title}
              </Typography>
              <Typography variant="h6" className="flex p-2">
                Price : &ensp;
                <b>{parseInt(price).toLocaleString()} &#8377; /-</b>
              </Typography>
              <Typography variant="h6" className="flex p-2">
                Rating :{" "}
                {[...Array(rating)].map((index) => (
                  <FaStar
                    id={index + 1}
                    key={index}
                    style={{ marginTop: "5px", marginLeft: "5px" }}
                  />
                ))}
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
