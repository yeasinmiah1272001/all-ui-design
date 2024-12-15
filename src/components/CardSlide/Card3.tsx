import React from "react";
import Container from "../Container";
import { treeBlog } from "@/constant";
import Image from "next/image";

const Card3 = () => {
  return (
    <Container className="px-6 py-8">
      {/* Header */}
      <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-900">
        Card Design 3
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {treeBlog.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden relative rounded-t-lg">
              <Image
                className="object-cover p-4 w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
                src={item.images[0].url}
                alt={item.title}
                height={192}
                width={300}
              />
              <span className="absolute left-6 border bg-transparent hover:bg-green-300 duration-300 border-gray-500 px-2 rounded-md p-1 top-3">
                {item.isNewArrival ? "Sold" : "Soldout"}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description}
              </p>
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

export default Card3;
