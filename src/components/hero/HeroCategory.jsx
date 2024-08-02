// src/AutoScrollingCarousel.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';

const HeroCategory = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const cards = [
    { id: 1, title : "Смартфоны", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/4/888ea4a7-55dc-4da3-b83d-f34a44c25e3c.svg" alt="Смартфоны" title="Смартфоны" width="full" loading="lazy" height="64" /> },
    { id: 2, title : "Кондиционеры", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/8/17e6cca8-ba51-490a-832a-e13d432640d2.svg" alt="Кондиционеры" title="Кондиционеры" width="full" loading="lazy" height="64" /> },
    { id: 3, title : "Кондиционеры", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/5/365fda66-9e5f-44ac-88ea-f25fc90dc9d1.svg" alt="Пылесосы" title="Пылесосы" width="full" loading="lazy" height="64" /> },
    { id: 4, title : "Холодильники", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/7/43e4d667-f026-484c-80a5-eebc1b128988.svg" alt="Холодильники" title="Холодильники" width="full" loading="lazy" height="64" /> },
    { id: 5, title : "Ноутбуки", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/22/4349e3dd-97b3-4300-9a34-16cfcb3d10c7.svg" alt="Ноутбуки" title="Ноутбуки" width="full" loading="lazy" height="64" /> },
    { id: 6, title : "Телевизоры", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/9/022df0cb-6560-4735-af2b-925057321911.svg" alt="Телевизоры" title="Телевизоры" width="full" loading="lazy" height="64" /> },
    { id: 7, title : "Кофемашины", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/23/5c67e6db-da29-4946-9790-83c15d205c82.svg" alt="Кофемашины" title="Кофемашины" width="full" loading="lazy" height="64" />},
    { id: 8, title : "Стиральные машины", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/11/ecd242c1-1ff2-4c5e-8e67-3fe7e2819b00.svg" alt="Стиральные машины" title="Стиральные машины" width="full" loading="lazy" height="64" />},
    { id: 9, title : "Фены", content: <img src="https://mini-io-api.texnomart.uz/catalog/special-category/10/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg" alt="Фены" title="Фены" width="full" loading="lazy" height="64"/>},
   
  ];

  return (
    <div className="relative container mx-auto px-4 py-8 gap-x-4">
        <h2>category</h2>
      <Slider ref={sliderRef} {...settings} className="px-4">
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-3 w-48 h-18 flex  items-center gap-x-3">
              <p className=''>{card.content}</p>
              <h3 className='text-sm text-center c-333 '>{card.title}</h3>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default HeroCategory;
