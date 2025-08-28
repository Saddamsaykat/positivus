import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  titleBgColor?: string;
  titleAos?: string;
  descAos?: string;
  descAosDelay?: number;
  maxWidth?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  titleBgColor = "#B9FF66",
  titleAos = "fade-right",
  descAos = "fade-left",
  descAosDelay = 200,
  maxWidth = "lg:max-w-[580px]",
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-center lg:items-start text-center lg:text-left">
      <h1
        data-aos={titleAos}
        className={`bg-[${titleBgColor}] rounded-[7px] text-[28px] sm:text-[34px] lg:text-[40px] px-[7px] font-medium`}
      >
        {title}
      </h1>
      <h3
        data-aos={descAos}
        data-aos-delay={descAosDelay}
        className={`text-[16px] sm:text-[18px] font-medium max-w-[380px] md:max-w-[580px] ${maxWidth}`}
      >
        {description}
      </h3>
    </div>
  );
};

export default SectionHeader;
