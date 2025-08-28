import SectionHeader from "@/utils/SectionHeader";
import image1 from "../../../../public/images/team/1.png"
import image2 from "../../../../public/images/team/2.png"
import image3 from "../../../../public/images/team/3.png"
import image4 from "../../../../public/images/team/4.png"
import image5 from "../../../../public/images/team/5.png"
import image6 from "../../../../public/images/team/6.png"
import Image from "next/image";

const Team = () => {
  return (
    <div className="mt-12 mb-12">
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {
              [
                { id: 1, image: image1, name: "image1" },
                { id: 2, image: image2, name: "image2" },
                { id: 3, image: image3, name: "image3" },
                { id: 4, image: image4, name: "image4" },
                { id: 5, image: image5, name: "image5" },
                { id: 6, image: image6, name: "image6" },
              ].map((img) => (
                <div key={img.id} className="">
                  <Image
                    src={img?.image}
                    alt={img?.name || "team image"}
                    className="w-full"
                  />
                </div>
              ))
            }
      </div>
    </div>
  );
};

export default Team;