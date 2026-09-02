import Image from "next/image";
export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-950">
          <Image
          src="/assets/logo.ico"
          alt="Logo"
          width={32}
          height={32}
          

          />
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#products"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Products
          </a>

          <button className="rounded-sm bg-blue-600 px-4 py-2.5 font-medium hover:text-slate-950">
            {" "}
            Sell{" "}
          </button>
        </nav>
      </div>
    </header>
  );
}
