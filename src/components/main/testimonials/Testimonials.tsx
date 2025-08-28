'use client';

import { useState } from 'react';
import SectionHeader from "@/utils/SectionHeader";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const testimonialsData = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote: "The team at Positivus has been a game-changer for our business. Their digital marketing expertise has significantly boosted our online visibility, and their customer service is top-notch. We are thrilled with the results!",
    author: "Jane Doe",
    title: "CEO at ABC Company",
  },
  {
    quote: "Positivus helped us redesign our website and optimize it for search engines. The new site looks fantastic and we've seen a noticeable improvement in our search rankings and organic traffic. We highly recommend their services.",
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
    setCurrentSlide((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <div className="mt-12 mb-12">
      <SectionHeader
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="bg-[#191A23] rounded-[45px] p-12 mt-12">
        <div className="relative flex justify-center items-center overflow-hidden h-[335px] w-full">
          {testimonialsData.map((testimonial, index) => {
            const isCurrent = index === currentSlide;
            const isLeft = index === (currentSlide - 1 + totalTestimonials) % totalTestimonials;
            const isRight = index === (currentSlide + 1) % totalTestimonials;

            let positionClass = '';
            let opacityClass = 'opacity-50';
            let zIndexClass = 'z-10';
            let bgClass = 'bg-[#191A23]';

            if (isCurrent) {
              positionClass = 'translate-x-0';
              opacityClass = 'opacity-100';
              zIndexClass = 'z-20';
              bgClass = 'bg-[#292A32]';
            } else if (isLeft) {
              positionClass = '-translate-x-[60%] lg:-translate-x-[40%] xl:-translate-x-[120%]';
            } else if (isRight) {
              positionClass = 'translate-x-[60%] lg:translate-x-[40%] xl:translate-x-[120%]';
            } else {
              positionClass = 'translate-x-[150%]';
              zIndexClass = 'z-0';
            }

            return (
              <div
                key={index}
                className={`absolute w-full max-w-[564px] h-full p-8 flex-shrink-0 transition-all duration-500 ease-in-out
                            ${positionClass} ${opacityClass} ${zIndexClass}
                            flex flex-col justify-between`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full rounded-[45px] ${bgClass} z-0`}
                ></div>

                {isCurrent && (
                  <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#292A32] z-10"></div>
                )}

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <p className="text-white text-lg leading-relaxed">{testimonial.quote}</p>
                  <div className="mt-auto pt-4">
                    <h4 className="text-[#B9FF66] text-xl font-bold">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-12 gap-x-8">
          <button onClick={prevSlide} className="text-white text-3xl hover:text-[#B9FF66] transition-colors">
            <BsArrowLeft />
          </button>
          <div className="flex space-x-2">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-[#B9FF66]' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
          <button onClick={nextSlide} className="text-white text-3xl hover:text-[#B9FF66] transition-colors">
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;