"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/Searchbar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <HeroSection/>
        <section id="products" className="py-12 sm:py-16">
          <div className=" mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
              <SearchBar 
              searchText={searchText}
              onSearchChange={setSearchText}/>
            </div>
          <ProductGrid
          searchText={searchText}/>
          </div>

        </section>
      </main>
      <Footer/>
    </div>
    
  );
}
