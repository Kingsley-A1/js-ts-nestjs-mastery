"use client";
import { useState } from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  isAvailable?: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  isAvailable,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecrease() {
    setQuantity((currentQuantity) =>
      currentQuantity > 1 ? currentQuantity - 1 : currentQuantity,
    );
  }
  const subTotal = price * quantity;
  return (
    <article className="border-slate flex h-full w-full max-w-sm flex-col rounded-2xl border">
      <span>
        <img
          src={`/images/${id}.jpg`}
          alt={name}
          className="h-full w-full object-cover"
        />
      </span>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">Price: ${price.toFixed(2)}</p>
      </div>
      <span className="flex items-center justify-between p-4">
        <button onClick={handleDecrease} className="">
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button onClick={handleIncrease} className="" disabled={!isAvailable}>
          +
        </button>
      </span>
    </article>
  );
}
