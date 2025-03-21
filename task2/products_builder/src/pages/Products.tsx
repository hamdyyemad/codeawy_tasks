import { Product } from "../types/product";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { productFields } from "../constants.ts";

import { ButtonSM } from "../components/ui/Buttons";
import Card from "../components/Card";
import Drawer from "../components/Drawer";

export default function Products() {
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    "https://dummyjson.com/products?limit=10"
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-300/90">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-300/90">
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
          <h1 className="text-3xl font-bold tracking-tight text-gray-300/90 flex-1">
            Our Products
          </h1>
          <ButtonSM onClick={() => setIsDrawerOpen(true)}>Create</ButtonSM>
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
