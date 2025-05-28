import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/adventurer.svg"
          alt="adventurer image"
          width={50}
          height={50}
          draggable={false}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Your Guide to India&apos;s Untamed Trails
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With the Travado app, you&apos;ll never feel lost in the wild again.
            Our offline map support ensures that even when you&apos;re deep in
            the forests or high in the Himalayas, you stay on track. Bring your
            friends and explore the breathtaking beauty of India, from lush
            valleys to scenic summits.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full px-5">
        <Image
          src="/Trail.avif"
          alt="trail"
          width={1440}
          height={580}
          className="w-full object-contain object-center rounded-5xl 2xl:rounded-5xl"
          draggable={false}
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            draggable={false}
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-blue-600">48 min</p>
              </div>
              <p className="bold-20 mt-2">Kasol, Himachal Pradesh</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Bhuntar Bus Stand
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
