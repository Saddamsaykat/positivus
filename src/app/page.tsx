import Banner from "@/components/main/banner/Banner";
import CompanySilder from "@/components/main/companySlider/CompanySilder";

const MainLayout = () => {
  return (
    <div className="mt-[80px]">
      <Banner />
      <CompanySilder />
    </div>
  );
};

export default MainLayout;