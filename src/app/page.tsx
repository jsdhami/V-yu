"use client";

import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex w-full flex-col items-top justify-center min-h-screen overflow-hidden">
        <video
          src="https://earth.gov/ghgcenter/earth-gas.83289921.mp4"
          autoPlay
          loop
          playsInline
          className="absolute mt-8 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Welcome to Climate Stories
          </h1>
          <p className="text-xl mb-8 text-center max-w-md">
            Discover the impact of climate change and learn how you can make a
            difference.
          </p>
          <div className=" flex flex-col flex-wrap gap-4 justify-center items-center">
            <button className="bg-white text-black text-lg font-bold py-2 px-4 rounded-md">
              <Link href="/static/the-climate-story/index.html">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}