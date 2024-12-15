import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import Container from "../Container";
import { treeBlog } from "@/constant";

const SideBar = () => {
  return (
    <div className="absolute right-2 bottom-4 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-green-400">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-green-400 border-y border-y-borderColor">
        <LuEye />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-green-400">
        <MdFavoriteBorder />
      </button>
    </div>
  );
};

const Card4 = () => {
  return (
    <Container className="">
      <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-900">
        Card Design 4
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {treeBlog.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden"
          >
            <Link href={"/"}>
              <div className=" relative">
                <Image
                  src={item?.images[0].url}
                  alt="product-image"
                  width={500}
                  height={500}
                  className="w-full h-48 object-contain hover:scale-110 duration-300"
                />
                <p className="absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 text-xs rounded-lg flex items-center">
                  {item?.rating}
                  <MdStar />
                </p>
                <SideBar />
              </div>
            </Link>
            <div className="border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40">
              <div className="flex flex-col ">
                <p className="text-sm text-lightText capitalize font-medium">
                  {item?.category}
                </p>

                <h2 className="font-semibold text-base line-clamp-2">
                  {item?.title}
                </h2>
                <p className="font-semibold text-skyColor">${item?.price}</p>
              </div>
              <button className="mt-4 px-4 py-2 w-full border border-gray-300 text-black rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300 hover:text-white">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Card4;
