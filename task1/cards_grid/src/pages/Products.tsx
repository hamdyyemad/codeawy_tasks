import Card from "../components/Card";
import Drawer from "../components/Drawer";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import { Product } from "../types/product";
import { productFields } from "../constants.ts";

export default function Products() {
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    "https://dummyjson.com/products?limit=10"
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-800">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-800">
        {error}
      </div>
    );
  }

  return (
    <>
      <Drawer
        fields={productFields}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <section className="p-5">
        {isDrawerOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm brightness-50  transition-opacity duration-300 z-10"
            onClick={() => setIsDrawerOpen(false)} // Click to close drawer
          />
        )}
        <div className="flex mt-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex-1">
            Our Products
          </h1>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center justify-center items-center  me-2 mb-2"
          >
            Create
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 place-items-center">
          {data?.products.map((p) => (
            <Card product={p} key={p.id} />
          ))}
        </div>
      </section>
    </>
  );
}
