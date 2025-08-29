"use client";

import { useState } from "react";
import SectionHeader from "@/utils/SectionHeader";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const testimonialsData = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "The team at Positivus has been a game-changer for our business. Their digital marketing expertise has significantly boosted our online visibility, and their customer service is top-notch. We are thrilled with the results!",
    author: "Jane Doe",
    title: "CEO at ABC Company",
  },
  {
    quote:
      "Positivus helped us redesign our website and optimize it for search engines. The new site looks fantastic and we've seen a noticeable improvement in our search rankings and organic traffic. We highly recommend their services.",
    author: "Michael Lee",
    title: "Owner at Global Solutions",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalTestimonials = testimonialsData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
    );
  };

  return (
    <div className="mt-6 mb-6 sm:mt-8 sm:mb-8 lg:mt-12 lg:mb-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="bg-[#191A23] rounded-[20px] sm:rounded-[30px] lg:rounded-[45px] p-4 sm:p-6 lg:p-12 mt-6 sm:mt-8 lg:mt-12">

        <div className="hidden md:block">
          <div className="relative flex justify-center items-center overflow-hidden h-[350px] lg:h-[400px] w-full">
            {testimonialsData?.map((testimonial, index) => {
              const isCurrent = index === currentSlide;
              const isLeft =
                index ===
                (currentSlide - 1 + totalTestimonials) % totalTestimonials;
              const isRight = index === (currentSlide + 1) % totalTestimonials;

              let positionClass = "";
              let opacityClass = "opacity-30";
              let zIndexClass = "z-10";

              if (isCurrent) {
                positionClass = "translate-x-0";
                opacityClass = "opacity-100";
                zIndexClass = "z-20";
              } else if (isLeft) {
                positionClass = "-translate-x-[70%] lg:-translate-x-[120%]";
              } else if (isRight) {
                positionClass = "translate-x-[70%] lg:translate-x-[120%]";
              } else {
                positionClass = "translate-x-[150%]";
                zIndexClass = "z-0";
                opacityClass = "opacity-0";
              }

              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-[500px] lg:max-w-[600px] h-auto flex-shrink-0 transition-all duration-500 ease-in-out
                              ${positionClass} ${opacityClass} ${zIndexClass}`}
                >
                  <div className="relative">
                    <div className="relative bg-transparent border-2 border-[#B9FF66] rounded-[20px] lg:rounded-[25px] p-6 lg:p-9 mb-12 lg:mb-16">
                      <p className="text-white text-base lg:text-lg leading-relaxed">
                        {testimonial.quote}
                      </p>

                      <div className="absolute bottom-[-15px] left-12 lg:left-16">
                        <div
                          className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] 
                                      border-l-transparent border-r-transparent border-t-[#B9FF66]"
                        ></div>
                      </div>
                    </div>
                    
                    <div className="ml-8 lg:ml-12 absolute -bottom-18 left-7">
                      <h4 className="text-[#B9FF66] text-lg lg:text-xl font-medium mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-white text-sm lg:text-base opacity-80">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="space-y-6">
            <div className="relative bg-transparent border-2 border-[#B9FF66] rounded-[20px] p-6">
              <p className="text-white text-base leading-relaxed mb-4">
                {testimonialsData[currentSlide].quote}
              </p>
              
              <div className="border-t border-gray-600 pt-4">
                <h4 className="text-[#B9FF66] text-lg font-medium mb-1">
                  {testimonialsData[currentSlide].author}
                </h4>
                <p className="text-white text-sm opacity-80">
                  {testimonialsData[currentSlide].title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 sm:mt-12 lg:mt-16 gap-x-4 sm:gap-x-6 lg:gap-x-8">
          <button
            onClick={prevSlide}
            className="text-white text-xl sm:text-2xl hover:text-[#B9FF66] transition-colors p-2 touch-manipulation"
            aria-label="Previous testimonial"
          >
            <BsArrowLeft />
          </button>

          <div className="flex space-x-2 sm:space-x-3">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 touch-manipulation ${
                  index === currentSlide ? "bg-[#B9FF66]" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white text-xl sm:text-2xl hover:text-[#B9FF66] transition-colors p-2 touch-manipulation"
            aria-label="Next testimonial"
          >
            <BsArrowRight />
          </button>
        </div>

        <div className="block md:hidden text-center mt-4">
          <p className="text-gray-400 text-xs">
            Swipe left or right, or use the arrows to navigate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;