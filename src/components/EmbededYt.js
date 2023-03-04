import React from "react";

function EmbededYt({src, title}) {
  return (
    <iframe
      className="w-full h-full"
      src={src}
      title={title}
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default EmbededYt;
