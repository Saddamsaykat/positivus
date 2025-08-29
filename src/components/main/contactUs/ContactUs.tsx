"use client"; // Add this line at the top

import SectionHeader from "@/utils/SectionHeader";
import Image from "next/image";
import contuctUsImage from "../../../../public/images/contuctUs/contactUs.png";

const ContactUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    alert("Form submitted successfully!" + " " + formData.get("name"));
    (event.currentTarget as HTMLFormElement).reset();
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0">
      <SectionHeader
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[45px] mt-6 sm:mt-8 lg:mt-12 mb-6 sm:mb-8 lg:mb-12 bg-[#F3F3F3] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-auto lg:h-[550px] xl:h-[600px] gap-6 sm:gap-8 lg:gap-12 xl:gap-0">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col">
            {/* Radio Buttons */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="contactType"
                    value="sayHi"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-green-500 rounded-full flex items-center justify-center peer-checked:bg-green-500 transition-colors duration-200">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Say Hi
                </span>
              </label>

              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="contactType"
                    value="getQuote"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:bg-green-500 transition-colors duration-200">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Get a Quote
                </span>
              </label>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-medium text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="name"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg bg-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-medium text-sm sm:text-base"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg bg-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium text-sm sm:text-base"

                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    required
                    rows={6}
                    name="message"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg bg-white placeholder-gray-400 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow sm:rows-7 lg:rows-8"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 lg:py-4 bg-gray-900 text-white font-semibold text-sm sm:text-base rounded-md sm:rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[45%] flex items-center justify-center lg:justify-end h-auto lg:h-full">
            <div className="hidden w-full max-w-sm sm:max-w-md md:max-w-lg">
              <Image
                src={contuctUsImage}
                alt="Contact Us"
                width={650}
                height={648}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="hidden lg:flex items-center justify-end h-full w-full">
              <Image
                src={contuctUsImage}
                alt="Contact Us"
                width={650}
                height={648}
                className="w-full max-w-[450px] xl:max-w-[500px] 2xl:max-w-[650px] h-auto max-h-[500px] xl:max-h-[550px] 2xl:max-h-[648px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;