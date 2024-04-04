import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absulate -z-10 w-full">
        <Image
          src="/assets/hero-homepage.jpg"
          width={1000}
          height={1000}
          alt="hero"
          className="w-full"
        />
      </div>
      <div className="">Home page</div>
    </div>
  );
}
