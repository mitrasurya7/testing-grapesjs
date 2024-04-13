import Image from "next/image";
import WebBuilder from "./webBuilder";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <WebBuilder />
    </main>
  );
}
