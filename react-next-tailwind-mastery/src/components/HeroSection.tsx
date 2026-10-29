export default function HeroSection() {
  return (
    // pick one spacing step and use it consistently for at least 3 spacing decisions in this file
    // spacing step: 12px (3 * 4px)
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className=" text-2xl font-bold tracking-wider text-blue-600 uppercase">
            {" "}
            GOODEALS Marketplace
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Quality, fast and affordable shopping
          </h1>

          <p className=" text-2xl leading-tight font-semibold tracking-normal text-slate-600 sm:text-lg">
            Discover trusted products from verified vendors, without the noise.
          </p>
        </div>
      </div>
    </section>
  );
}
