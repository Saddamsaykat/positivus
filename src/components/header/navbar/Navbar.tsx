import Image from "next/image";
import logo from "../../../../public/images/imageLogo.png";
import Link from "next/link";
const Navbar = () => {
  const navItem = [
    {
      name: "About Us",
      path: "/aboutUs",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Use Cases",
      path: "/useCases",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="flex items-center justify-between pt-[60px]">
      <Link href="/">
        <Image src={logo} alt="logo" width={200} height={200} />
      </Link>
      <div className="flex items-center gap-10 text-[20px] font-normal line-height-[28px]">
        {navItem.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.path}>{item.name}</a>
            </div>
          );
        })}

        <div>
          <button className="border border-[#191A23] rounded-[14px] py-5 px-[35px] font-normal text-[20px] line-height-[28px]">Request a quote</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
