import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absulate -z-10 w-full">
        <Image
          src="/assets/hero-homepage.jpg"
          width={1409}
          height={842}
          alt="hero"
          className="w-full md:h-screen bg-no-repeat"
        />
      </div>
      <div>
        <div className="flex">
          <div>
            <h1>Some of our other titles</h1>
          </div>
          <div>Button</div>
        </div>
        <div>
          <div>High Noon</div>
          <div>
            <div>Westwood Manor</div>
            <div>Control Override</div>
          </div>
        </div>
      </div>
    </div>
  );
}
