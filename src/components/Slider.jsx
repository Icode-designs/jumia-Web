import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  let images = [
    {
      src: "/image/ju1.jpg",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju2.jpg",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju3.png",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju4.jpg",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju5.gif",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju7.png",
      style: "rounded-md w-full grow",
    },
    {
      src: "/image/ju8.png",
      style: "rounded-md w-full grow",
    },
  ];

  return (
    <div id="slider">
      <Carousel fade>
        {images.map((image, imageIndex) => (
          <Carousel.Item key={imageIndex}>
            <img
              src={image.src}
              className={image.style}
              alt={`Slide ${imageIndex + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
