import Image from "next/image"
import cardImage1 from "../../../../public/images/servicesImages/1.png"
import cardImage2 from "../../../../public/images/servicesImages/2.png"
import cardImage3 from "../../../../public/images/servicesImages/3.png"
import cardImage4 from "../../../../public/images/servicesImages/4.png"
import cardImage5 from "../../../../public/images/servicesImages/5.png"
import cardImage6 from "../../../../public/images/servicesImages/6.png"

const Services = () => {
    const images = [
        { id: 1, image: cardImage1, name: "image1" },
        { id: 2, image: cardImage2, name: "image2" },
        { id: 3, image: cardImage3, name: "image3" },
        { id: 4, image: cardImage4, name: "image4" },
        { id: 5, image: cardImage5, name: "image5" },
        { id: 6, image: cardImage6, name: "image6" },
    ]
    return (
        <div>
            <div>
                <h1>Services</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img) => (
                        <div key={img.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><Image src={img.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Services;