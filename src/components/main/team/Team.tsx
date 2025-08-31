import SectionHeader from "@/utils/SectionHeader";
import Image from "next/image";
import person1 from "../../../../public/images/team/person1.png";
import person2 from "../../../../public/images/team/person2.png";
import person3 from "../../../../public/images/team/person3.png";
import person4 from "../../../../public/images/team/person4.png";
import person5 from "../../../../public/images/team/person5.png";
import person6 from "../../../../public/images/team/person6.png";
import { CiLinkedin } from "react-icons/ci";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: person1,
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: person2,
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: person3,
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: person4,
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: person5,
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      experience:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
      image: person6,
    },
  ];

  return (
    <div className="mt-12 mb-12">
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" rounded-[32px] p-8 shadow-lg border-b-4 border-black relative group hover:shadow-xl transition-all duration-300"
          >
            {/* LinkedIn Icon */}
            <div className="absolute top-6 right-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <CiLinkedin className="text-2xl" />
              </div>
            </div>

            {/* Profile Image with Green Blob Background */}
            
              <div className="flex gap-3.5 items-center">
                {/* Profile Image */}
                <div>
                  <Image src={member.image} alt={member.name} className="w-[105px] h-[102px]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold  mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
           

            {/* Content */}
            <div className="space-y-3">
              {/* Divider Line */}
              <div className="w-full h-px bg-black my-4"></div>

              <p className="text-sm leading-relaxed">
                {member.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
