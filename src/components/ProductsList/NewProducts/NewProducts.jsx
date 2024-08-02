import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/cart/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className='mb-10'>Novinki</h2>
      <div className='flex flex-wrap gap-y-10 gap-x-5 items-center pt-16'>
        {products.map((product) => (
          <div 
            key={product.id}
            className="max-w-72 rounded overflow-hidden shadow-lg hover:shadow-2xl hover:transform transition duration-800 ease-in-out bg-white cursor-pointer"
            onClick={() => handleCardClick(product.id)}
          >
            <img src={product.thumbnail} alt={product.title} title={product.title} width="598" height="320" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product.price} $
              </span>
              <div className='border-2 inline-block border-yellow-400 rounded-xl'>
                <button aria-label="basket" className="btn-card-min basket-min px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.33301 1.74999C1.33301 1.24373 1.74342 0.833313 2.24969 0.833313H4.71301C5.14707 0.833313 5.52164 1.13774 5.61034 1.56264L6.22362 4.50004H17.8333C18.8458 4.50004 19.6666 5.32086 19.6666 6.3334V10.298C19.6666 11.166 19.0581 11.9149 18.2086 12.0926L8.24725 14.1761C7.25609 14.3833 6.28456 13.7479 6.07735 12.7567L3.96795 2.66668H2.24969C1.74342 2.66668 1.33301 2.25626 1.33301 1.74999ZM7.68189 11.4846C7.78538 11.9803 8.27118 12.2982 8.76684 12.1946L17.1042 10.4513C17.5289 10.3625 17.8333 9.98794 17.8333 9.55398V7.25008C17.8333 6.74382 17.4229 6.3334 16.9166 6.3334H6.6064L7.68189 11.4846Z" fill="#333333"></path>
                    <path d="M7.16669 19.1666C8.08718 19.1666 8.83338 18.4204 8.83338 17.4999C8.83338 16.5795 8.08718 15.8333 7.16669 15.8333C6.2462 15.8333 5.5 16.5795 5.5 17.4999C5.5 18.4204 6.2462 19.1666 7.16669 19.1666Z" fill="#333333"></path>
                    <path d="M15.4997 19.1666C16.4202 19.1666 17.1664 18.4204 17.1664 17.4999C17.1664 16.5795 16.4202 15.8333 15.4997 15.8333C14.5792 15.8333 13.833 16.5795 13.833 17.4999C13.833 18.4204 14.5792 19.1666 15.4997 19.1666Z" fill="#333333"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
