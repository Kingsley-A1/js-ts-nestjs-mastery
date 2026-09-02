"use client";

import { useState } from "react";

type ProductCardProps = {
  name: string;
  price: number;
  isAvailable: boolean;
};

export default function ProductCard({
  name,
  price,
  isAvailable,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  function handleDecrease() {
    setQuantity((currentQuantity) =>
      currentQuantity > 1 ? currentQuantity - 1 : 1,
    );
  }

  const subtotal = price * quantity;

  return (
    <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-sm font-medium text-slate-500">
          Product image
        </span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            {name}
          </h2>

          <p className="mt-2 text-lg font-bold text-slate-950">
            ₦{price.toLocaleString()}
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleDecrease}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="flex size-10 items-center justify-center rounded-lg border border-slate-300 bg-white font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          <span className="min-w-10 text-center text-lg font-semibold text-slate-950">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            disabled={!isAvailable}
            aria-label="Increase quantity"
            className="flex size-10 items-center justify-center rounded-lg bg-slate-900 font-semibold text-white transition hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-600">Subtotal</span>

          <strong className="text-xl font-bold text-slate-950">
            ₦{subtotal.toLocaleString()}
          </strong>
        </div>
      </div>
    </article>
  );
}
