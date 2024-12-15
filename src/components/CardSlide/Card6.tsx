import { treeBlog } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";

const Card6 = () => {
  return (
    <Container className="py-10">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
        Card 6
      </h2>

      <div>
        <div className="grid lg:grid-cols-4 gap-6">
          {treeBlog.slice(0, 4).map((dest) => (
            <Link
              href="/"
              key={dest.id}
              className="relative border border-gray-400  text-white shadow-md rounded-lg overflow-hidden group"
            >
              <Image
                src={dest.images[0].url}
                alt={dest.title}
                height={100}
                width={200}
                className="w-full h-auto opacity-75 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-between p-4">
                <h3 className="transform -translate-y-28 bg-black text-lg font-extrabold tracking-wide px-4 py-2 w-full transition-transform duration-300 group-hover:translate-y-0 z-50">
                  {dest.title}
                </h3>
                <p className="text-right opacity-0 transition-opacity text-black duration-300 group-hover:opacity-100 z-50">
                  {dest.description}
                </p>
              </figcaption>
              <div className="absolute inset-0 flex items-center justify-center bg-yellow-500 bg-opacity-75 text-black text-5xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <i className="ion-android-add transform scale-100 transition-transform duration-300 group-hover:scale-50 opacity-100 group-hover:opacity-0"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Card6;
