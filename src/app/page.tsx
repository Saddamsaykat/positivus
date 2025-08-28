import Banner from "@/components/main/banner/Banner";
import CaseStudies from "@/components/main/caseStudies/CaseStudies";
import CompanySilder from "@/components/main/companySlider/CompanySilder";
import OurworkingProcess from "@/components/main/ourworkingProcess/OurworkingProcess";
import ProjectProposal from "@/components/main/projectProposal/ProjectProposal";
import Services from "@/components/main/services/Services";

const MainLayout = () => {
  return (
    <div className="mt-[80px]">
      <Banner />
      <CompanySilder />
      <Services />
      <ProjectProposal />
      <CaseStudies />
      <OurworkingProcess />
    </div>
  );
};

export default MainLayout;
