import React, { useContext } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext)
  const [, refetch] = useCart()
    const {image, name, recipe, _id} = item
    const navigate = useNavigate()
    const location = useLocation()
    console.log(item)
    const handleAddToCart = (item) => {
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, price: item.price, image, recipe, email: user?.email}
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch() // refetch the cart for update the number every time add to the cart
            Swal.fire({
              title: 'Successfully your item added in the cart.',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'You have to login before the item add to your cart',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Please Login!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
  return (
    <div>
      <div className="bg-base-200 rounded-none ">
        <img className="w-full" src={image} alt="Menu" />
        <div className="card-body p-3 items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className=" h-[70px]">{recipe}</p>
          <div onClick={()=>handleAddToCart(item)}>
          <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
