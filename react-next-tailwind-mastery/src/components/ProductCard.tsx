"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../colours/button";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  location?: string;
  image?: string;
  isAvailable?: boolean;
};
export default function ProductCard({
  id,
  name,
  price,
  location,
  image,
  isAvailable,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((prevQauntity) => prevQauntity + 1);
  }

  function handleDecrease() {
    setQuantity((currentQuantity) =>
      currentQuantity > 1 ? currentQuantity - 1 : currentQuantity,
    );
  }
  const subtotal = price * quantity;

  return (
    <article className="flex h-full w-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-slate-100">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={320}
            height={192}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <span className="text-sm font-medium text-slate-500">
            Product Image
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 text-left">
        <div>
          <h2 className="text-lg leading-6 font-semibold tracking-tight text-slate-700">
            {name}
          </h2>
          <p className="mt-2 text-xl font-bold text-slate-950">
            ${price.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {location ?? "Unknown Location"}
          </p>
        </div>
        <span
          className={
            isAvailable
              ? "shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
              : "shrink-0 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
          }
        >
          {isAvailable ? "In stock" : "Out of stock"}
        </span>
      </div>
      <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-slate-700">Quantity</p>
        <div className="flex items-center gap-6">
          <Button
            type="button"
            onClick={handleDecrease}
            disabled={quantity === 1}
            aria-label="Decrease Quantity Button"
            variant="secondary"
            className="flex h-10 w-full items-center justify-center rounded-lg focus-visible:outline-none"
          >
            -
          </Button>

          <span className="min-w-1 text-center text-lg font-semibold text-slate-950">
            {quantity}
          </span>

          <Button
            type="button"
            onClick={handleIncrease}
            variant="primary"
            disabled={!isAvailable}
            aria-label="Increase Quantity Button"
            className="focus-visible: focus-visible: focus-visible:ring--offset-2 dsiabled:opacity-40 flex h-10 w-full items-center justify-center rounded-lg ring-slate-900 outline-none focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed"
          >
            +
          </Button>
        </div>
      </div>

      <div className="mt-6 border-slate-200 pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-600"> Subtotal</span>
          <strong className="text-xl font-bold text-slate-950">
            ${subtotal.toLocaleString()}
          </strong>
        </div>
      </div>

      <Link
        href={`/products/${id}`}
        className="mt-6 text-center font-semibold text-blue-600 hover:text-blue-800"
      >
        See details
      </Link>
    </article>
  );

  // return(
  //     <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  //         <h2>{name}</h2>
  //         <p>Price: ${price.toFixed(2)}</p>
  //         <p>{isAvailable ? "In Stock" : "Out of Stock"}</p>
  //         <p>Quantity: {quantity}</p>
  //         <button onClick={handleDecrease} disabled ={!isAvailable}>-</button>
  //         <button onClick={handleIncrease} disabled ={!isAvailable}>+</button>
  //         <p>Subtotal: ${subtotal.toFixed(2)}</p>
  //     </article>
  // )
}
