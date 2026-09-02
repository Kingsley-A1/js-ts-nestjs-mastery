import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {

    return(
      <main className="bg-slate-50 text-center min-h-screen flex items-center justify-center text-2xl font-semibold text-slate-700">
        <p>Product not found</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="font-semibold text-blue-600 hover:text-blue-800"
        >
          Back to products
        </Link>  

        <article className="mt-8 grid gap-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8 border-b-4">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={480}
              className="h-full max-h-96 w-full rounded-lg object-cover"
            />
          ) : (
            <div className="flex min-h-72 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-500">
              Product Image
            </div>
          )}
   
          <div> 
            <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              {product.condition}
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-850">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-extrabold text-slate-950">
              ${product.price.toLocaleString()}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Located in {product.location ?? "Unknown location"}
            </p>
            <p className="mt-6 leading-7 text-slate-700">
              {product.description}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
