// app/page.tsx or pages/index.tsx
import { Button } from "@/ui/Button";
import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />  
    </>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-2xl p-6 text-center shadow hover:shadow-lg transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
