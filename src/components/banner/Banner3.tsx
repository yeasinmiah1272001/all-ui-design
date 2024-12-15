import Image from "next/image";
import banner1 from "../../image/middle.jpg";
import Container from "../Container";

const Banner3 = () => {
  return (
    <Container className="">
      <h1 className="text-3xl font-bold mb-4">Banner3</h1>
      <div className="relative w-full h-[400px]">
        <Image
          className="object-cover"
          src={banner1}
          fill
          alt="banner1"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black bg-opacity-20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-xl px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ficus Bonsai Tree
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              quasi itaque eveniet optio pariatur? Aspernatur aut, fuga eum id,
              doloremque non quos tempore aperiam deserunt voluptatibus
              provident ipsum quidem delectus!
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm md:text-base font-semibold shadow-md transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner3;
