import React from "react";
import Image from "next/image";

function ImageMeal({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="rounded-xl"
    />
  );
}

export default ImageMeal;
