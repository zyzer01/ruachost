import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero image */}
      <Image
        src="/images/hero entry.jpg" // Ensure this path is correct
        alt="Building entry hero image"
        width={704}
        height={384}
        className="w-full h-[60vh] object-cover"
        sizes="(min-width: 1024px) 66vw, 100vw"
      />

      {/* Overlaying text */}
      <div className="-mt-10 w-full h-full">
        <div className="bg-black bg-opacity-60 text-white p-8 rounded-md max-w-[700px] mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Premium web hosting and cloud that’s fair to you and the planet.
          </h1>
          <p className="text-lg">
            I created Krystal in 2002 to provide an "Honest, Reliable and
            Personal" alternative to the large, faceless hosting corporations.
            Leveraging our experience we've created Katapult, a master-crafted
            cloud for developers that also runs all of our own award-winning web
            hosting. Available in 4 global locations, our cloud and web hosting
            are guaranteed to run on 100% renewable energy and offer fair,
            transparent pricing. Join Krystal today for web hosting that's
            conscious without compromising on quality, performance, or the
            health of our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
