"use client";

import Image from "next/image";
import react from "react";
import Link from "next/link";
import WhiteLogo from "@/public/logo-white.svg";
import FacebookLogo from "@/public/icon-facebook.svg";
import TwitterLogo from "@/public/icon-twitter.svg";
import PinterestLogo from "@/public/icon-pinterest.svg";
import InstagramLogo from "@/public/icon-instagram.svg";
import shorten from "@/app/lib/shortener";

export default function Home() {
  const [hamburgerMenu, setHamburgerMenu] = react.useState("");

  react.useEffect(() => {
    if (window.screen.width > 768) {
      setHamburgerMenu("hidden");
    } else {
      setHamburgerMenu("");
    }
  }, []);

  react.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width > 768) {
        setHamburgerMenu("hidden");
      } else {
        setHamburgerMenu("");
      }
    });
  }, []);
  const [mobileNav, setMobileNav] = react.useState("hidden");

  return (
    <>
      <nav className="max-w-7xl m-auto my-10 flex justify-between items-center antialiased max-md:mx-6">
        <div className="flex gap-12 items-center text-gray relative">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Shortly logo"
              width={130}
              height={130}
            />
          </Link>
          <div className="flex gap-8 max-md:hidden">
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
        <div className="flex gap-10 items-center text-gray max-md:hidden">
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
        {/* Mobile Nav */}
        <div
          id="hamburgerMenu"
          className={hamburgerMenu}
          onClick={() =>
            setMobileNav((prev) => {
              if (prev == "hidden") {
                return "";
              } else {
                return "hidden";
              }
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div className={mobileNav} id="mobileNav">
        <div className="max-md:bg-dark_violet text-white font-bold text-lg gap-5 rounded-lg flex flex-col items-center justify-between absolute px-10 py-10 top-28 mx-5 left-0 right-0">
          <div className="flex flex-col gap-7 items-center">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/resources">Resources</Link>
          </div>
          <div className="bg-slate-500 w-full h-[1px]" />
          <div className="flex flex-col items-center gap-7">
            <Link href="/login">Login</Link>
            <button
              onClick={() => console.log("Clicked")}
              className="bg-cyan py-3 px-6 rounded-full text-white font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <main className="flex flex-row max-lg:flex-col-reverse max-w-7xl m-auto justify-between max-md:text-center">
        <div>
          <h1 className="text-7xl font-bold mt-28 leading-tight antialiased max-md:text-5xl max-md:mt-12">
            More than just
            <br />
            shorter links
          </h1>
          <p className="text-gray leading-8 mt-2 text-xl max-md:mx-6 max-md:mt-5">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="bg-cyan py-4 px-10 rounded-full text-white font-bold mt-8 max-md:py-5 max-md:text-xl">
            Get Started
          </button>
        </div>
        <Image
          src="/illustration-working.svg"
          width={100}
          height={100}
          alt="Person working"
          className="right-0 mt-9 w-full max-md:static max-md:w-full max-md:h-full"
        />
      </main>
      <div className="max-w-7xl m-auto mb-[-50px] z-10 mt-40 p-12 rounded-lg bg-dark_violet flex relative max-md:h-100 max-md:justify-between max-md:mx-5 max-md:p-6 max-md:mt-20">
        <Image
          src="/bg-shorten-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 left-0 z-0 w-full h-full"
        />
        <div className="flex w-full gap-5 justify-between max-md:flex-col max-md:m-auto">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="rounded-md grow-[3] h-full pl-4 z-10 max-md:py-4 max-md:align-middle max-md:w-full"
            id="link_input"
          />
          <button
            className="bg-cyan py-4 px-7 rounded-md text-white font-bold shrink-0 z-10 grow max-md:w-full"
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
        <div className="max-w-7xl m-auto flex max-md:flex-col max-md:gap-20 justify-between mt-20">
          <div className="bg-white p-7 relative max-w-96 rounded-md max-md:m-auto">
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
          <div className="bg-white p-7 relative max-w-96 rounded-md max-md:m-auto">
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
          <div className="bg-white p-7 relative max-w-96 rounded-md max-md:m-auto">
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
      <section className="bg-dark_violet relative">
        <Image
          src="/bg-boost-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 left-0 w-full h-full bg-cover z-0"
        />
        <div className="max-w-7xl m-auto text-center py-20 z-10 relative">
          <h1 className="font-bold text-4xl text-white max-md:text-3xl">
            Boost your links today
          </h1>
          <button className="bg-cyan py-3 px-6 rounded-full text-white font-bold mt-5 max-md:px-7 max-md:text-lg">
            Get Started
          </button>
        </div>
      </section>
      <footer className="bg-very_dark_violet p-16 pb-24">
        <div className="flex justify-between max-w-7xl m-auto max-md:flex-col max-md:gap-10 max-md:items-center max-md:text-center">
          <WhiteLogo />
          <div className="flex gap-16 max-md:flex-col">
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
            <FacebookLogo />
            <TwitterLogo />
            <PinterestLogo />
            <InstagramLogo />
          </div>
        </div>
      </footer>
    </>
  );
}
