"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import shorten from "@/app/lib/shortener";

export default function Home() {
  return (
    <>
      <nav className="max-w-7xl m-auto my-10 flex justify-between items-center antialiased">
        <div className="flex gap-12 items-center text-gray">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Shortly logo"
              width={130}
              height={130}
            />
          </Link>
          <div className="flex gap-8">
            <Link href="/features" className="hover:text-black duration-100">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-black duration-100">
              Pricing
            </Link>
            <Link href="/resources" className="hover:text-black duration-100">
              Resources
            </Link>
          </div>
        </div>
        <div className="flex gap-10 items-center text-gray">
          <Link href="login" className="hover:text-black duration-100">
            Login
          </Link>
          <button
            onClick={() => console.log("Clicked")}
            className="bg-cyan py-3 px-6 rounded-full text-white font-bold"
          >
            Sign Up
          </button>
        </div>
      </nav>
      <main className="flex flex-row max-w-7xl m-auto justify-between">
        <div>
          <h1 className="text-7xl font-bold mt-28 leading-tight antialiased">
            More than just
            <br />
            shorter links
          </h1>
          <p className="text-gray leading-8 mt-2 text-xl">
            Build your brand&apos;s recognition and get detailed
            <br /> insights on how your links are performing.
          </p>
          <button className="bg-cyan py-4 px-10 rounded-full text-white font-bold mt-8">
            Get Started
          </button>
        </div>
        <Image
          src="/illustration-working.svg"
          width={800}
          height={100}
          alt="Person working"
          className="absolute right-0 mt-9"
        />
      </main>
      <div className="max-w-7xl m-auto mb-[-50px] z-10 mt-40 p-12 rounded-lg bg-dark_violet flex relative">
        <div className="flex gap-5 justify-between">
          <input
            placeholder="Shorten a link here..."
            className="rounded-md grow-[3] h-full pl-4"
            id="link_input"
          />
          <button
            className="bg-cyan py-4 px-7 h-full rounded-md text-white font-bold shrink-0 block"
            onClick={() => shorten()}
          >
            Shorten it!
          </button>
        </div>
      </div>
      <section className="bg-slate-100 z-0 pb-28">
        <div className="max-w-7xl m-auto text-center pt-40">
          <h1 className="text-black text-5xl font-bold">Advanced Statistics</h1>
          <p className="mt-5 leading-6 text-gray">
            Track how your links are performing across the web with
            <br />
            our advanced statistics dashboard.
          </p>
        </div>
        <div className="max-w-7xl m-auto flex justify-between mt-20">
          <div className="bg-white p-7 relative max-w-96 rounded-md">
            <div className="rounded-full bg-very_dark_violet h-20 w-20 top-[-35px] absolute flex items-center justify-center">
              <Image
                src="/icon-brand-recognition.svg"
                width={10}
                height={10}
                alt="Brand recognition"
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
            <h1 className="mt-10 font-bold text-lg">Brand Recognition</h1>
            <p className="leading-6 text-gray pb-6 mt-3">
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className="bg-white p-7 relative max-w-96 rounded-md">
            <div className="rounded-full bg-very_dark_violet h-20 w-20 top-[-35px] absolute flex items-center justify-center">
              <Image
                src="/icon-detailed-records.svg"
                width={10}
                height={10}
                alt="Brand recognition"
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
            <h1 className="mt-10 font-bold text-lg">Detailed Records</h1>
            <p className="leading-6 text-gray pb-6 mt-3">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-white p-7 relative max-w-96 rounded-md">
            <div className="rounded-full bg-very_dark_violet h-20 w-20 top-[-35px] absolute flex items-center justify-center">
              <Image
                src="/icon-fully-customizable.svg"
                width={10}
                height={10}
                alt="Brand recognition"
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
            <h1 className="mt-10 font-bold text-lg">Fully Customizable</h1>
            <p className="leading-6 text-gray pb-6 mt-3">
              Improve brand awareness and content discoverability through
              cusomizable links. Supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-dark_violet">
        <div className="max-w-7xl m-auto text-center py-20">
          <h1 className="font-bold text-4xl text-white">
            Boost your links today
          </h1>
          <button className="bg-cyan py-3 px-6 rounded-full text-white font-bold mt-5">
            Get Started
          </button>
        </div>
      </section>
      <footer className="bg-very_dark_violet p-16 pb-24">
        <div className="flex justify-between max-w-7xl m-auto">
          <Logo color="white" />
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-white mb-3">
                Features
              </Link>
              <Link
                href="/features/shortening"
                className="text-gray hover:text-cyan duration-100"
              >
                Link Shortening
              </Link>
              <Link
                href="/features/branded-links"
                className="text-gray hover:text-cyan duration-100"
              >
                Branded Links
              </Link>
              <Link
                href="/features/analytics"
                className="text-gray hover:text-cyan duration-100"
              >
                Analytics
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/resources" className="text-white mb-3">
                Resources
              </Link>
              <Link
                href="/resources/blog"
                className="text-gray hover:text-cyan duration-100"
              >
                Blog
              </Link>
              <Link
                href="/resources/developers"
                className="text-gray hover:text-cyan duration-100"
              >
                Developers
              </Link>
              <Link
                href="/resources/support"
                className="text-gray hover:text-cyan duration-100"
              >
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-white mb-3">
                Features
              </Link>
              <Link
                href="/features/shortening"
                className="text-gray hover:text-cyan duration-100"
              >
                Link Shortening
              </Link>
              <Link
                href="/features/branded-links"
                className="text-gray hover:text-cyan duration-100"
              >
                Branded Links
              </Link>
              <Link
                href="/features/analytics"
                className="text-gray hover:text-cyan duration-100"
              >
                Analytics
              </Link>
            </div>
          </div>
          <div className="flex gap-5">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook Icon"
              width={100}
              height={100}
              className="h-full w-full"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
