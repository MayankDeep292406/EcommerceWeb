import React from 'react'
import ShopingCart from "./ShopingCart";

// export default function Final() {
//     const ProductWithDiscount = ShopingCart.map(items =>{
//         const discountedPrice = items.price -(items.price * items.discount)/100;
//         console.log(`${items.name} - Original: ₹${items.price}, Discounted: ₹${discountedPrice}`);
//    });
//   return 
  

// }
// export default function Final() {
// const instockOnly = ShopingCart.map(item => item.inStock)
// console.log(instockOnly);

// return(
//     <div>
//       {/* {instockOnly.map(item => (
//         <p key={item.id}>
//           {item.name} and ₹{item.price} and {item.inStock ? "In Stock" : "Out of Stock"}
//         </p>
//       ))} */}
//     </div>
// )
// }


// function Final() {
//     const available = ShopingCart.filter(item=> item.inStock);
//     console.log(available)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Final;

// export default function Final(){
//     const Total = ShopingCart.reduce((total, items)=>{
//         const discountPrice = items.price -(items.price * items.discount)/100;
//         return total + discountPrice;
//     },0);
//     console.log(Total)
// }

// export default function Products(){
//     const filtter = ShopingCart.filter(item =>(item.price>1500))
//     console.log(filtter);
// }

// export default function discount(){
//     const discounted = ShopingCart.reduce((total, item) =>{
//         const value = (item.price * item.discount)/100;
//         return total + value
//     },0)
//     console.log(discounted)

// }

export default function name(){
    const list = ShopingCart.map(item=>(item.name));
    console.log(list);
}