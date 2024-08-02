import { SlSocialFacebook } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import React from 'react'
import { RxValue } from "react-icons/rx";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div>
      <div className='footer-top bg-zinc-700 text-white pt-14 px-7 flex items-start gap-x-10 '>
        
        <div className='footer-top-left pb-10'>
          <div className="footer-content mb-14 ">
            <h3 className='text-sm '>Возник вопрос? Звоните</h3>
            <a className='text-xl ' href="tel:+998880209959">+998-88-020-99-59</a>
          </div>
          <div className='footer-social flex gap-x-3 mb-10 '>
            <button className="bg-zinc-500 rounded-xl ">
              <a href="https://www.facebook.com/texnomart" className="text-6xl "> <SlSocialFacebook /> </a>
            </button>
            <button className="bg-zinc-500">
              <a href="https://www.instagram.com/texnomart/" className="text-6xl"> <FaInstagram /> </a>
            </button>
            <button className="bg-zinc-500">
              <a href="https://t.me/texnomart" className="text-6xl"> <TbBrandTelegram /> </a>
            </button>
            <button className="bg-zinc-500">
              <a href="https://www.youtube.com/c/Texnomart" className="text-6xl"> <AiOutlineYoutube /> </a>
            </button>
          </div>
          <div className="footer-apps flex gap-x-4 mb-10">
            <a data-v-dc687574="" href="https://play.google.com/store/apps/details?id=com.texnomart.app" rel="nofollow" title="playmarket" target="_blank" class="footer__play">
              <img data-v-dc687574="" src="https://texnomart.uz/_nuxt/img/playmarket-logo-ru.8f7eb5c.svg" alt="google play" title="google play" width="143" height="47" loading="lazy" />
            </a>
            <a data-v-dc687574="" href="https://apps.apple.com/uz/app/texnomart/id6443874184" rel="nofollow" title="playmarket" target="_blank" class="footer__play ml-3">
              <img data-v-dc687574="" src="https://texnomart.uz/_nuxt/img/appstore-logo-ru.34b758d.svg" alt="google play" title="google play" width="143" height="47" loading="lazy" />
            </a>
          </div>
          <div className="footer-adres">
            <a href="https://texnomart.uz/ru/shops-map/" rel="noindex , nofollow ">
              aдреса магазинов
              <span>
                Тошкент
              </span>
            </a>
            
          </div>

        </div>

        <div className="footer-top-right">
          <div className="Company">
            <h2 className="text-white text-lg">
              Компания
            </h2>
            <ul>
              <li>
                <a href="pages">
                  Юридическим лицам
                </a>  
              </li>
              <li>
                <Link to={'/pages'}>
                  О Техномарт
                </Link>
              </li>
              <li>
                <Link to={'/pages'}>
                  Новости и блоги
                </Link>
              </li>
              <li>
                <Link to={'/pages'}>
                  Проверка IMEI
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop