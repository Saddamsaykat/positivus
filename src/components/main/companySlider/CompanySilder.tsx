import Image from "next/image";
import image1 from "../../../../public/iconSilder/1.png";
import image2 from "../../../../public/iconSilder/2.png";
import image3 from "../../../../public/iconSilder/3.png";
import image4 from "../../../../public/iconSilder/4.png";
import image5 from "../../../../public/iconSilder/5.png";
import image6 from "../../../../public/iconSilder/6.png";

import "./style.css";

const CompanySilder = () => {
  const images = [
    { id: 1, image: image1, name: "image1" },
    { id: 2, image: image2, name: "image2" },
    { id: 3, image: image3, name: "image3" },
    { id: 4, image: image4, name: "image4" },
    { id: 5, image: image5, name: "image5" },
    { id: 6, image: image6, name: "image6" },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          {images.map((img) => (
            <div key={img.id} className="marquee-item">
              <Image
                src={img.image}
                alt={img.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="marquee-content">
          {images.map((img) => (
            <div key={`dup-${img.id}`} className="marquee-item">
              <Image
                src={img.image}
                alt={img.name}
                width={100}
                height={100}
                className="object-contain"
                title={img.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySilder;
