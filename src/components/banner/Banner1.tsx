import Image from "next/image";
import banner1 from "../../image/bannerImgOne.jpg";
import Container from "../Container";

const Banner1 = () => {
  return (
    <Container className="">
      <h1 className="text-3xl font-bold">Banner1</h1>
      <div className="w-full relative">
        <Image
          className="w-full h-[400px] object-cover"
          src={banner1}
          height={500}
          width={500}
          alt="banner1"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

        <div className="absolute top-1/2 left-8 max-w-xl transform -translate-y-1/2 text-white text-left px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            iPhone 16 Pro Max
          </h1>
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

export default Banner1;
