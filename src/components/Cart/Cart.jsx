import React, { useEffect, useState ,useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Slider from 'react-slick';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    // This function will generate star elements based on the rating
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  // const sliderRef = useRef(null);
  // const settings = {
  //   infinite: true,
  //   speed: 600,
  //   dots: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // }



  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <div className='Card-top flex items-center gap-x-10'>

        <div className='ratings'>
          <div className="stars">{renderStars(product.rating)}</div>
        </div>

        <div className='like-buttonCard'>
          <button className='flex items-center gap-x-2'>
            <img src="https://texnomart.uz/_nuxt/img/like-default-18.d6ad116.svg" alt="like-active" width="20" height="20" loading="lazy" />
            <h4>В избранное</h4>
          </button>
        </div>

        <div className='compareCard'>
          <button className='flex items-center gap-x-2'>
            <img src="https://texnomart.uz/_nuxt/img/compare-default2.ab68d6d.svg" alt="compare" width="20" height="20" loading='lazy' />
            <h4>В сравнение</h4>
          </button>
        </div>


      </div>




      <div className="flex items-center justify-center">
        <div className='card-left w-1/2'>

          {/* <Slider ref={sliderRef} {...settings} className="px-4">
            {product.map((product) => (
              <div key={product.id} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-3 w-36">
                  <p className='px-0'>{product.img}</p>
                </div>
              </div>
            ))}
          </Slider> */}

          <div>
            <img src={product.thumbnail} alt={product.title} title={product.title} className="w-full mb-4" />
          </div>


        </div>
        <div className='card-right'>
          <h3 className='mb-5'><strong>Коротко о товаре : </strong></h3>
          <h3><strong>Title : </strong> {product.title}</h3>
          <p><strong>Description : </strong> {product.description}</p>
          <p><strong>Category : </strong>{product.category}</p>
          <p><strong>Price : </strong> {product.price} $</p>
          <p><strong>Warranty : </strong>{product.warrantyInformation}</p>
          <p><strong>Shipping : </strong>{product.shippingInformation}</p>
          <p><strong>Minimum order : </strong>{product.minimumOrderQuantity}</p>
          <p><strong>weight : </strong>{product.weight} Kg</p>
          <div>
            <p><strong>width : </strong> {product.dimensions.width}</p>
            <p><strong>Height : </strong>{product.dimensions.height}</p>
          </div>
         
        </div>
      </div>


    </div>
  );
};

export default ProductDetails;
