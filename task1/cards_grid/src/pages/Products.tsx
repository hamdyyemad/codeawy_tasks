import { Product } from "../types/product";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export default function Products() {
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    "https://dummyjson.com/products?limit=10"
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <section className="p-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Our Products
      </h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 place-items-center">
        {data?.products.map((p) => (
          <Card product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
