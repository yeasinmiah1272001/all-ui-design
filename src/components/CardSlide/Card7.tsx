import { treeBlog } from "@/constant";
import Image from "next/image";
import Container from "../Container";

const Card7 = () => {
  return (
    <Container className="py-8 ">
      <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-900">
        Card 7
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto ml-4">
        {treeBlog.slice(0, 4).map((item) => (
          <figure
            key={item.id}
            className="relative bg-white text-gray-700 inline-block font-roboto text-lg overflow-hidden max-w-[280px] min-w-[230px] w-full group shadow-md rounded-lg transition-all duration-300 transform border border-gray-400"
          >
            <Image
              src={item.images[0].url}
              height={100}
              width={100}
              alt={item.title || "Image"}
              className="transition-opacity w-full p-6 h-48 rounded-t-lg duration-500 group-hover:opacity-10"
            />
            <Image
              src={item.images[1]?.url || item.images[0].url}
              height={100}
              width={100}
              alt={item.title || "Hover Image"}
              className="absolute inset-0 object-cover p-6 w-full h-48 rounded-t-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <figcaption className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                {item.title || "Card Title"}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description || "Card description goes here..."}
              </p>
              <button className="mt-4 px-4 py-2 w-full border border-gray-300 text-black rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300 hover:text-white">
                Add To Cart
              </button>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
};

export default Card7;
