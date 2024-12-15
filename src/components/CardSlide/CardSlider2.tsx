"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { treeBlog } from "@/constant";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Container from "../Container";
import { TreeBlogItem } from "../../../type";

// ==================================
// npm install react-slick --save
// npm install slick-carousel --save
// ==================================

const CardSlider2 = () => {
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
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for larger tablets
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Single slide on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="slider-container relative">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
        Slide Design 2
      </h2>
      <div className="absolute top-1/2 left-0 z-10 flex justify-between w-full transform -translate-y-1/2 px-6">
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
            <div className="rounded-lg border border-gray-400 hover:shadow-lg shadow-md overflow-hidden transition group hover:shadow-black duration-300">
              <Image
                className="mx-auto object-cover duration-300 group-hover:scale-110 transition-transform h-44 w-full p-4"
                src={item.images[0].url}
                alt={item.title}
                height={100}
                width={300}
              />
              <div className="p-12">
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
    </Container>
  );
};

export default CardSlider2;
