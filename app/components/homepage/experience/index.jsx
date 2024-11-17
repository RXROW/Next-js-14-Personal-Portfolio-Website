import React from 'react';
import Image from "next/image";
import "../../../css/card.scss"; // Ensure the styles are properly applied

const awards = [
  {
    id: 1,
    title: "Website of the Day",
    company: "Awwwards",
    duration: "June, 2023",
    image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1731782511/portfolio/qvhdbwjj3ygbrhgaggxd.png",
  },
  {
    id: 3,
    title: "Website of the Day",
    company: "Awwwards",
    duration: "June, 2023",
    image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1731782511/portfolio/qvhdbwjj3ygbrhgaggxd.png",
  },
  {
    id: 512,
    title: "Website of the Day",
    company: "Awwwards",
    duration: "June, 2023",
    image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1731782511/portfolio/qvhdbwjj3ygbrhgaggxd.png",
  },
  {
    id: 65,
    title: "Website of the Day",
    company: "Awwwards",
    duration: "June, 2023",
    image: "https://res.cloudinary.com/dyv3dluov/image/upload/v1731782511/portfolio/qvhdbwjj3ygbrhgaggxd.png",
  },
];

function Experience() {
  return (
    <div id="experience" className="relative border-t my-12 border-[#25213b] py-16">
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1570}
        height={790}
        className="absolute top-0 -z-10 w-full"
      />

      {/* Title */}
      <h2 className="text-pink-500 text-sm mb-12 flex justify-center uppercase tracking-widest">
        [My Experience]
      </h2>

      {/* Divider Line */}
      <div className="flex justify-center mb-8">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

      {/* Blur Effect Background */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[50%] translate-x-[-50%] filter blur-3xl opacity-20"></div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {awards.map((award) => (
          <div
            key={award.id}
            className="glow-card relative w-full p-2 bg-[#04051a] rounded-sm flex flex-col"
          >
            {/* Award Duration */}
            <div className="absolute right-4 top-[36%]">
              <p className="text-xs sm:text-sm bg-[#16f2b3] rounded-full text-black px-3 py-2">
                {award.duration}
              </p>
            </div>

            {/* Award Content */}
            <div className="relative z-10 flex items-center gap-x-8 px-3 py-4">
              <Image
                src={award.image}
                width={100}
                height={50}
                alt="Award"
                className="hover:scale-110 transition-transform rounded-md cursor-pointer"
              />
              <div className="flex flex-col items-start">
                <p className="text-yellow-50 text-base mb-1 font-medium uppercase">
                  {award.title}
                </p>
                <p className="text-yellow-50 text-sm sm:text-base">
                  {award.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
