"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";

import cardImage1 from "../../../../public/images/servicesImages/seo.png";
import cardImage2 from "../../../../public/images/servicesImages/advertize.png";
import cardImage3 from "../../../../public/images/servicesImages/socialMediaMarketing.png";
import cardImage4 from "../../../../public/images/servicesImages/email-marketing.png";
import cardImage5 from "../../../../public/images/servicesImages/contentCreate.png";
import cardImage6 from "../../../../public/images/servicesImages/analysis.png";

import SectionHeader from "@/utils/SectionHeader";
import { MdArrowOutward } from "react-icons/md";

const ServicesClient = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const services = [
    {
      id: 1,
      cardName: "Search engine optimization",
      image: cardImage1,
      cardBgColor: "bg-[#F3F3F3]",
      bgColorText: "bg-[#B9FF66]",
    },
    {
      id: 2,
      cardName: "Pay-per-click advertising",
      image: cardImage2,
      cardBgColor: "bg-[#B9FF66]",
      bgColorText: "bg-white",
    },
    {
      id: 3,
      cardName: "Social Media Marketing",
      image: cardImage3,
      cardBgColor: "bg-[#191A23]",
      bgColorText: "bg-white",
    },
    {
      id: 4,
      cardName: "Email Marketing",
      image: cardImage4,
      cardBgColor: "bg-[#F3F3F3]",
      bgColorText: "bg-[#B9FF66]",
    },
    {
      id: 5,
      cardName: "Content Creation",
      image: cardImage5,
      cardBgColor: "bg-[#B9FF66]",
      bgColorText: "bg-white",
    },
    {
      id: 6,
      cardName: "Analytics and Tracking",
      image: cardImage6,
      cardBgColor: "bg-[#191A23]",
      bgColorText: "bg-white",
    },
  ];

  return (
    <div className="mt-12 mb-12">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {services?.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            className={`w-[600px] h-[310px] flex justify-between items-center ${service?.cardBgColor} border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-[50px]`}
          >
            <div className="flex flex-col justify-between h-full">
              <h3 className={`text-black text-[15px] sm:text-[15px] lg:text-[30px] font-bold max-w-[250px] 
              ${service?.bgColorText} p-2 rounded-2xl`}>
                {service?.cardName}
              </h3>
              <Link
                href="#"
                className="mt-4 text-black flex items-center gap-6 text-[20px]"
              >
                <span className="bg-black rounded-full text-[#B9FF66] p-2 text-[35px]">
                  <MdArrowOutward />
                </span>{" "}
                Learn more
              </Link>
            </div>
            <Image
              src={service?.image}
              alt={service?.cardName}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesClient;
