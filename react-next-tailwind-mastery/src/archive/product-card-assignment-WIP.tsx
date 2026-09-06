"use client";
import { useState } from "react";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  isAvailable?: boolean;
};

// const productImagePath:string = "C:\Users\hp\Desktop\Nest Mastery\react-next-tailwind-mastery\public\vercel.svg";

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
    <article className="h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="mb-6 flex h-48 items-center justify-items-center rounded-xl bg-slate-100">
        <Image
          src={`/images/${id}.jpg`}
          alt={name}
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="tracking-tighttext-slate-950 text-xl font-semibold">
            {name}
          </h2>
          <p className="mt-2 text-lg font-bold text-slate-950">
            {price.toLocaleString()}
          </p>
        </div>

        <div>
          {/* TODO: Complete the design for the availability status and other
          features of the product card. This includes implementing the quantity
          increase/decrease buttons, displaying the subtotal, and ensuring that
          the availability status is clearly indicated to the user.
          Additionally, consider adding accessibility features and responsive
          design elements to enhance the user experience across different
          devices. */}
          <span className="bg-emerald-160 shrink-0 rounded-full"></span>
        </div>
      </div>
    </article>
  );
}
