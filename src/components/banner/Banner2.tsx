import Image from "next/image";
import banner1 from "../../image/left.webp";
import Container from "../Container";

const Banner2 = () => {
  return (
    <Container className="">
      <h1 className="text-3xl font-bold mb-4">Banner2</h1>
      <div className="relative w-full h-[400px]">
        {/* Image */}
        <Image
          className="object-cover"
          src={banner1}
          fill
          alt="banner1"
          sizes="100vw"
        />

        {/* Gradient Overlay (right side only) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20 to-transparent" />

        {/* Right-Aligned Text Content */}
        <div className="absolute top-1/2 right-8 max-w-xl -translate-y-1/2 text-white text-right px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ficus Bonsai Tree
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quasi itaque eveniet optio pariatur? Aspernatur aut, fuga eum id,
            doloremque non quos tempore aperiam deserunt voluptatibus provident
            ipsum quidem delectus!
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm md:text-base font-semibold shadow-md transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Banner2;
