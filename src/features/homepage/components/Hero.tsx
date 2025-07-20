import Image from "next/image";
import Link from "next/link";
import HomeContainer from "@homepage/components/ui/HomeContainer";

const Hero = () => {
  return (
    <HomeContainer className="flex items-center justify-center gap-6">
      <div className="flex max-w-[600px] flex-col items-start justify-center">
        <h1 className="mb-3 text-5xl font-black lg:text-6xl">
          Discover Something Yummy Every Day!
        </h1>

        <p className="mb-8 w-9/12">
          Connect, Share, and Explore Delicious Recipes with Cookit - The
          Ultimate Social Media Platform for Food Enthusiasts!
        </p>

        <Link
          href="/auth/signup"
          role="button"
          className="rounded-full bg-primary-dark px-16 py-3 font-semibold text-slate-50 shadow-xl transition-transform ease-linear hover:scale-105 active:scale-95"
        >
          Get started
        </Link>
      </div>

      <Image
        src="/home/hero.png"
        alt="Image of a sallad"
        className="absolute -right-64 -z-20 shrink-0 drop-shadow-[0px_5px_10px_#7ac74f] sm:-right-52 md:-right-40 lg:static lg:right-4"
        height={500}
        width={500}
        priority
      />
    </HomeContainer>
  );
};

export default Hero;
