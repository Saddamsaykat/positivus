"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";

import cardImage1 from "../../../../public/images/servicesImages/1.png";
import cardImage2 from "../../../../public/images/servicesImages/2.png";
import cardImage3 from "../../../../public/images/servicesImages/3.png";
import cardImage4 from "../../../../public/images/servicesImages/4.png";
import cardImage5 from "../../../../public/images/servicesImages/5.png";
import cardImage6 from "../../../../public/images/servicesImages/6.png";
import SectionHeader from "@/utils/SectionHeader";

if (typeof window !== "undefined") {
  AOS.init({ duration: 1000, once: true });
}

const ServicesClient = () => {
  const images = [
    { id: 1, image: cardImage1, name: "image1" },
    { id: 2, image: cardImage2, name: "image2" },
    { id: 3, image: cardImage3, name: "image3" },
    { id: 4, image: cardImage4, name: "image4" },
    { id: 5, image: cardImage5, name: "image5" },
    { id: 6, image: cardImage6, name: "image6" },
  ];

  return (
    <div className="mt-12 mb-12">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div>
        <Link
          href={"/service"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6"
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex items-center gap-4"
            >
              <Image
                src={img.image}
                alt={img.name || "image"}
                className="w-full"
              />
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default ServicesClient;
