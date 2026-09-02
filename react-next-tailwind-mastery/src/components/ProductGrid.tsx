import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type ProductGridProps = {
  searchText: string;
};

export default function ProductGrid({ searchText }: ProductGridProps) {
  const normalizedSearch = searchText.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(normalizedSearch),
  );

  if (filteredProducts.length === 0) {
    return (
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-slate-950">
          No Products found
        </h2>

        <p className="text-slate-600">Try searching for something else</p>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-950">
          Available Products
        </h2>

        <p className="shrink-0 text-sm text-slate-600">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"} found
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            location={product.location}
            isAvailable={product.isAvailable}
          />
        ))}
      </div>
    </section>
  );
}
