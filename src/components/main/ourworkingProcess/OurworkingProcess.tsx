"use client";

import SectionHeader from "@/utils/SectionHeader";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Imported FaPlus and FaMinus

const processSteps = [
  {
    index: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    index: 2,
    title: "Research and Strategy Development",
    description:
      "We analyze your market, competitors, and audience to craft a data-driven strategy that aligns with your goals.",
  },
  {
    index: 3,
    title: "Implementation",
    description:
      "We execute the strategy across selected channels, ensuring consistency and brand alignment.",
  },
  {
    index: 4,
    title: "Monitoring and Optimization",
    description:
      "We track performance metrics and optimize campaigns in real-time to maximize ROI.",
  },
  {
    index: 5,
    title: "Reporting and Communication",
    description:
      "We provide transparent reports and maintain regular communication to keep you informed.",
  },
  {
    index: 6,
    title: "Continual Improvement",
    description:
      "We refine strategies based on insights and feedback, ensuring long-term growth and adaptability. We refine strategies based on insights and feedback, ensuring long-term growth and adaptability. We refine strategies based on insights and feedback, ensuring long-term growth and adaptability. We refine strategies based on insights and feedback, ensuring long-term growth and adaptability.",
  },
];

const OurworkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <div className="mt-16 mb-16 flex flex-col gap-[30px]">
      <SectionHeader
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="flex flex-col gap-6">
        {processSteps.map((step) => (
          <div
            key={step.index}
            className={`border border-b-black border-b-[5px] rounded-[20px] cursor-pointer ${
              step.index === activeIndex
                ? "bg-[#B9FF66] border-[#3B9DF8]"
                : "bg-white border-[#e5eaf2]"
            } p-6 transition-all duration-300 ease-in-out`}
            onClick={() => toggleAccordion(step.index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[1.2rem] font-semibold text-[#191A23] flex justify-center items-center gap-[25px]">
                <span className="text-[60px] font-medium">
                  {String(step.index).padStart(2, "0")}
                </span>{" "}
                <span className="text-[30px] font-medium">{step.title}</span>
              </h3>
              <div
                className={`text-[1.3rem] transition-transform duration-300 flex items-center h-full bg-red-white ${
                  activeIndex === step.index ? "text-[#191A23] bg-white" : ""
                }`}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #191A23",
                  padding: "5px",
                }}
              >
                {/* Conditional rendering of the icons */}
                {activeIndex === step.index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === step.index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <hr className="pb-2" />
              <div className="overflow-hidden">
                <p className="text-[#191A23] text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurworkingProcess;
