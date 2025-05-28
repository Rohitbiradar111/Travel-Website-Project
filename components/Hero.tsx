import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/adventurer.svg"
          alt="adventurer image"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          draggable={false}
        />
        <h1 className="bold-52 lg:bold-88">Munnar Hillside Camp</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Travado is your trusted companion for exploring India&apos;s
          breathtaking landscapes. Whether it's the Western Ghats or the
          Himalayas, let us take you on unforgettable adventures — all in one
          app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  draggable={false}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            220k
            <span className="regular-16 lg:regular-20 ml-2">
              Happy Travelers
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_blue" />
          <Button
            type="button"
            title="How Travado works?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="bold-20 text-white">Munnar, Kerala</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">95.4 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.600 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
