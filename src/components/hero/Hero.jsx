import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
  };

  const images = [
    'https://mini-io-api.texnomart.uz/newcontent/slider/124/fckkb4oJ30nga1ucnpcbLh8b7JaiW5otFp7Wk5rV.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/123/P3fTR6NMQIYEKkUVRnQy0HDKVX0jZXM52hXxL5JL.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/126/NZ9evlmWRYztu3lo43H0QFp1E7zHnqdsHRrQheTy.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/125/gF65l9LP3k7JV0iPCRWIiSl8Y68HjV3oUBJCxhf8.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/122/2rsH4fR5uCsOawQ9cyhGwZcDNsbmAzh8NtpNQjwe.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/109/BSGj0OfHgmS7tYNvorkqjZAX0D7ehKEMPqJl0kk7.webp',
    'https://mini-io-api.texnomart.uz/newcontent/slider/111/mwCwNbCh7V0GTTPjQr8jsP3ZRM6pCUbfSRAke7l7.webp'
  ];

  return (
    <div className=" mx-auto  py-2 full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center h-96 bg-gray-100">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
