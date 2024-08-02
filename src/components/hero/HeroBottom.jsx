// src/AutoScrollingCarousel.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';

const AutoScrollingCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const cards = [
    { id: 1, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp" alt="LG" title="LG" className="w-full h-16 object-scale-down" /> },
    { id: 2, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/70/7160cc7e-711b-44bb-a6dc-77dca7ec4924.webp" alt="Samsung" title="Samsung" className="w-full h-16 object-scale-down" /> },
    { id: 3, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp" alt="Xiaomi" title="Xiaomi" className="w-full h-16 object-scale-down" /> },
    { id: 4, content: <img src='https://mini-io-api.texnomart.uz/catalog/special-brands/80/dd3aeb98-802f-4ddd-9d07-c1abd4b1a482-medium.webp' alt='Huawei' title='Huawei' className="w-full h-16 object-scale-down" /> },
    { id: 5, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png" alt='Honor' title='Honor' className="w-full h-16 object-scale-down" /> },
    { id: 6, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/73/e9c04fcd-5ed8-41f8-b417-a8f190a77de1.svg" alt="Vivo" title="Vivo" className="w-full h-16 object-scale-down" /> },
    { id: 7, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/69/6808325d-2e60-425d-9e5c-6e79cab00233.svg" alt="Apple" title="Apple" className="w-full h-16 object-scale-down" /> },
    { id: 8, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/96/a9acfae1-3152-4e14-a0b1-3012477425c3.svg" alt="Infinix" title="Infinix" className="w-full h-16 object-scale-down" /> },
    { id: 9, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp" alt="Oppo" title="Oppo" className="w-full h-16 object-scale-down" /> },
    { id: 10, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/89/409cc1aa-92c8-403e-96fc-f0e3dc15da92-medium.webp" alt="HANSA" title="HANSA" className="w-full h-16 object-scale-down" /> },
    { id: 11, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/90/21a7fcd7-6ca4-4cd3-ade4-499ad6c96660-medium.webp" alt="Hisense" title="Hisense" className="w-full h-16 object-scale-down" /> },
    { id: 12, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/75/cb377838-24b4-4c67-8efb-42f81678c320.webp" alt="Tefal" title="Tefal" className="w-full h-16 object-scale-down" /> },
    { id: 13, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/85/b2eb3b33-9a84-4b37-80a4-421332d0c5fc-medium.png" alt="DeLonghi" title="DeLonghi" className="w-full h-16 object-scale-down" /> },
    { id: 14, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/82/21a6cb21-9bd1-4c03-80f0-ec9a32985113-medium.png" alt="Moulinex" title="Moulinex" className="w-full h-16 object-scale-down" /> },
    { id: 15, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/81/8541e646-2b8a-40aa-95e1-d4147930533a-medium.webp" alt="Rowenta" title="Rowenta" className="w-full h-16 object-scale-down" /> },
    { id: 16, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/81/8541e646-2b8a-40aa-95e1-d4147930533a-medium.webp" alt="Rowenta" title="Rowenta" className="w-full h-16 object-scale-down" /> },
    { id: 17, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/95/fea35281-51c5-4891-bc7e-be964ab67689.svg" alt="Karcher" title="Karcher" className="w-full h-16 object-scale-down" /> },
    { id: 18, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/86/bcb5b55f-1d8a-462e-8b82-da83da2c7e56.svg" alt="Krups" title="Krups" className="w-full h-16 object-scale-down" /> },
    { id: 19, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/84/2f4d6f16-a2af-45bc-9993-82a0320e0630-medium.png" alt="Braun" title="Braun" className="w-full h-16 object-scale-down" /> },
    { id: 20, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/93/2792adbb-db65-4295-a741-18c31c71b8ec-medium.webp" alt="Яндекс" title="Яндекс" className="w-full h-16 object-scale-down" /> },
    { id: 21, content: <img src="https://mini-io-api.texnomart.uz/catalog/special-brands/91/e3cc7a21-1549-4aa5-b9d2-ba885a129e67-medium.webp" alt="Kenwood" title="Kenwood" className="w-full h-16 object-scale-down" /> },
  ];

  return (
    <div className="relative container mx-auto px-4 py-8 gap-x-4">

      <Slider ref={sliderRef} {...settings} className="px-4">
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-3 w-36">
              <p className='px-0'>{card.content}</p>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default AutoScrollingCarousel;
