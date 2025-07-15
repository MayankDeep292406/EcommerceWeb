import React from 'react'

 function LikeCard({name,brand,price,discountPrice,image}) {
  return (
    <div>
       <div className="border p-4 rounded shadow w-64">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">Name:{name}</h2>
      <p className="text-sm text-gray-500">{brand}</p>
      {/* <p className="text-red-600 font-bold">₹{discountPrice}</p> */}
      <p className="line-through text-gray-400 text-sm">₹{price}</p>
    </div>
    </div>
  )
}
export default LikeCard;