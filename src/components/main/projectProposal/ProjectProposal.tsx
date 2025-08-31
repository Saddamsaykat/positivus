import Image from "next/image";
import image from "../../../../public/images/projectProposal/projectProposal.png";

const ProjectProposal = () => {
  return (
    <div className="relative w-full h-auto lg:h-[347px] px-6 sm:px-10 md:px-20 lg:px-[60px] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[275px] rounded-[45px] sm:max-w-[488px] lg:max-w-[1440px] container mx-auto">
      <div className="flex flex-col gap-6 sm:gap-[26px] max-w-full lg:max-w-[500px] h-auto lg:h-[227px] text-center lg:text-left">
        <h1 data-aos="fade-left" className="font-spaceGrotesk font-medium text-[24px] sm:text-[28px] lg:text-[30px] leading-[100%]">
          Let`s make things happen
        </h1>
        <p data-aos="fade-left" className="font-spaceGrotesk font-normal text-[16px] sm:text-[18px] leading-[120%]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button data-aos="fade-right" className="w-full sm:w-[288px] h-[60px] sm:h-[68px] px-[20px] sm:px-[35px] py-[15px] sm:py-[20px] rounded-[14px] bg-black text-white text-[14px] sm:text-[16px] font-medium">
          Get your free proposal
        </button>
      </div>

      <div className="w-[494px] h-[394px] absolute right-0 hidden lg:flex">
        <Image
          src={image}
          alt="imageBanner"
          width={494}
          height={394}
          className="w-full h-full object-contain"
          priority
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default ProjectProposal;
