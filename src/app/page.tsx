import Banner from "@/components/main/banner/Banner";
import CompanySilder from "@/components/main/companySlider/CompanySilder";
import ProjectProposal from "@/components/main/projectProposal/ProjectProposal";
import Services from "@/components/main/services/Services";

const MainLayout = () => {
  return (
    <div className="mt-[80px]">
      <Banner />
      <CompanySilder />
      <Services />
      <ProjectProposal />
    </div>
  );
};

export default MainLayout;