import Image from "next/image";
import Features from "./components/Features.js";
import Hero from "./components/Hero.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24">
      <Hero />
      <Features />
    </main>
  );
}
