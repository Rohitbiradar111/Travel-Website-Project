import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app opacity-95">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Download Travado Now!
          </h2>
          <p className="regular-16 text-gray-10">
            Your gateway to India&apos;s most beautiful trekking and travel
            spots - available on iOS and Android.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phoneImage.png"
            alt="phone image"
            width={550}
            height={70}
            className="md:p-16 lg:p-16"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
