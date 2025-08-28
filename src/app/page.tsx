import Banner from "@/components/main/banner/Banner";
import CompanySilder from "@/components/main/companySlider/CompanySilder";
import Services from "@/components/main/services/Services";

const MainLayout = () => {
  return (
    <div className="mt-[80px]">
      <Banner />
      <CompanySilder />
      <Services />
    </div>
  );
};

export default MainLayout;