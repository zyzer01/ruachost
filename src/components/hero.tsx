import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <Image
        src="/images/hero entry.jpg"
        alt="Building entry hero image"
        width={704}
        height={384}
        className="w-[100%] h-[60vh] object-cover"
        sizes="(min-width: 1024px) 66vw, 100vw"
      />
    </div>
  );
}
