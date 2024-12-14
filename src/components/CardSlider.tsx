"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { treeBlog } from "@/constant";
import Image from "next/image";
import { useRef } from "react";
import { TreeBlogItem } from "../../type";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
// ==================================
// npm install react-slick --save
// npm install slick-carousel --save
// ==================================

const CardSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container py-10 px-4 md:px-10 ">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
        Featured Blogs
      </h2>
      <div className="flex justify-end gap-6 items-center mb-4">
        <button
          onClick={previous}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          <FaArrowCircleLeft size={30} />
        </button>
        <button
          onClick={next}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          <FaArrowCircleRight size={30} />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {treeBlog.map((item: TreeBlogItem) => (
          <div key={item.id} className="p-4 m-0 gap-6 ">
            <div className=" rounded-lg border border-gray-400 hover:shadow-black  shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                className=" mx-auto object-contain h-56 p-4"
                src={item.images[0].url}
                alt={item.title}
                height={200}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
