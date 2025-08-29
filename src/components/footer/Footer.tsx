import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import logo from "../../../public/images/whiteLogo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#1E1E2D] text-gray-300 py-10 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-col space-y-8">
                
                <div className="flex flex-col lg:flex-row justify-between items-center pb-6 border-b border-gray-700 space-y-4 lg:space-y-0">
                    
                    <div className="flex items-center space-x-2">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </div>

                    <nav className="flex flex-wrap justify-center lg:flex-nowrap space-x-4 md:space-x-8 text-base font-semibold">
                        <a href="#" className="hover:text-white transition-colors underline">About us</a>
                        <a href="#" className="hover:text-white transition-colors underline">Services</a>
                        <a href="#" className="hover:text-white transition-colors underline">Use Cases</a>
                        <a href="#" className="hover:text-white transition-colors underline">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors underline">Blog</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                       <CiLinkedin />
                       <FaFacebook />
                       <TiSocialTwitterCircular />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start py-8">
                    <div className="flex flex-col space-y-4">
                        <div className="bg-[#B9FF66] text-[#000000] px-4 rounded-md text-[20px] font-semibold inline-block self-start">
                            Contact us
                        </div>
                        <p className="text-[18px] font-normal text-white">Email: info@positivus.com</p>
                        <p className="text-[18px] font-normal text-white">Phone: 555-567-8901</p>
                        <p className="text-[18px] font-normal text-white">Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
                    </div>

                    <div className="bg-[#2C2C3F] p-6 rounded-xl shadow-md flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-grow p-3 rounded-md bg-[#3F3F56] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3D82F6] text-white placeholder-gray-400 w-full sm:w-auto"
                            />
                            <button className="bg-[#B9FF66] text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-[#a3eb55] transition-colors w-full sm:w-auto">
                                Subscribe to news
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700" />
                <div className="flex flex-col sm:flex-row items-center gap-8 text-sm pt-4">
                    <p>&copy; {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
                    <a href="#" className="hover:text-white transition-colors underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;