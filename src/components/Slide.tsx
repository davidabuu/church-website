import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { message, Image } from "antd";
import { ImageData } from "@/app/utils";

interface ImageData {
  filename: string;
  url: string;
}

export default function Slide() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    // Fetch the list of images from the API
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}${ImageData.getAllImages}`
        );

        if (response.status === 200) {
          // Store the fetched images in state
          setImages(response.data);
        } else {
          message.error("Failed to fetch images.");
        }
      } catch (error) {
        message.error("Error fetching images.");
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Map over the images array to create SwiperSlide components */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              alt={`Image ${index}`}
              src={`https://localhost:7007${image.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
