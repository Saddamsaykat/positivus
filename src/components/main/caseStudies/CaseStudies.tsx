"use client";
import { useRef, useState } from "react";
import SectionHeader from "@/utils/SectionHeader";

const caseStudies = [
  {
    title: "Local Restaurant PPC Campaign",
    result: "50% increase in traffic, 25% boost in sales",
    description:
      "Targeted Pay-Per-Click ads drove local engagement and conversions.",
    link: "#",
  },
  {
    title: "B2B Software SEO Strategy",
    result: "200% organic traffic growth, first-page keyword ranking",
    description: "Optimized content and backlinks for scalable inbound leads.",
    link: "#",
  },
  {
    title: "National Retail Social Campaign",
    result: "25% follower growth, 20% online sales increase",
    description:
      "Engaging social content and influencer partnerships delivered results.",
    link: "#",
  },
];

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="mt-16 mb-16">
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="hidden md:flex mt-8 bg-[#191A23] rounded-[45px] px-[60px] py-[70px] gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`flex-1 px-4 ${
              index < caseStudies.length - 1 ? "border-r border-white" : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-[#B9FF66] mb-2">
              {study.title}
            </h3>
            <p className="text-lg text-[#F3F3F3] mb-4">{study.description}</p>
            <p className="text-md font-semibold text-[#F3F3F3] mb-6">
              {study.result}
            </p>
            <a
              href={study.link}
              className="text-[#B9FF66] font-semibold text-md hover:underline flex items-center gap-2"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
      <div
        ref={containerRef}
        className="md:hidden mt-8 flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-4 py-10 bg-[#191A23] rounded-[45px] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {caseStudies.map((study, index) => (
          <div key={index} className="min-w-full snap-center px-6">
            <h3 className="text-2xl font-bold text-[#B9FF66] mb-2">
              {study.title}
            </h3>
            <p className="text-lg text-[#F3F3F3] mb-4">{study.description}</p>
            <p className="text-md font-semibold text-[#F3F3F3] mb-6">
              {study.result}
            </p>
            <a
              href={study.link}
              className="text-[#B9FF66] font-semibold text-md hover:underline flex items-center gap-2"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;