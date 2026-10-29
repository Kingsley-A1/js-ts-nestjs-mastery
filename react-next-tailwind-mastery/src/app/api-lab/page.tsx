"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ApiLabPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadProducts() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not load products.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-lg p-8">
      <h1 className="mb-4 text-2xl font-bold">Bespoke Tech API Lab</h1>
      <button
        type="button"
        onClick={loadProducts}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load Products"}
      </button>
      {error && <p role="alert">{error}</p>}
      <ul className="mt-6 space-y-3">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {currencyFormatter.format(product.price)}
          </li>
        ))}
      </ul>
    </main>
  );
}
