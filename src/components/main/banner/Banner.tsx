"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import bannerImage from "../../../../public/images/banner.png";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-4">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col justify-center lg:text-left">
            <h1
              data-aos="fade-up"
              className="order-1 font-medium text-[44px] md:text-[44px] lg:text-[58px] xl:text-[60px] leading-tight "
            >
              Navigating the <br />
              <span className="">digital landscape</span> <br />
              for success
            </h1>{" "}
            <div
              data-aos="fade-up"
              className="order-2 flex justify-center lg:hidden mt-6"
            >
              <Image
                src={bannerImage}
                alt="imageBanner"
                className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] h-auto"
                priority
              />
            </div>
            <h3
              data-aos="fade-up"
              className="order-3 mt-6 font-normal text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-relaxed max-w-[600px] mx-auto lg:mx-0"
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </h3>
            <div data-aos="fade-up" className="order-4 mt-8 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#191A23] px-6 sm:px-8 md:px-10 lg:px-[35px] py-3 sm:py-4 md:py-5 lg:py-[20px] rounded-[14px] text-white font-normal text-base sm:text-lg md:text-xl lg:text-[20px] hover:bg-[#333] transition">
                Book a consultation
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-1 hidden lg:flex justify-end"
          >
            <Image
              src={bannerImage}
              alt="imageBanner"
              className="w-full max-w-[580px] xl:max-w-[600px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;