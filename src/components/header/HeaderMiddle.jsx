import { Menu } from '@mui/material'
import React from 'react'

const HeaderMiddle = () => {
  return (
    <div className='py-6 '>
      <div className='flex justify-around items-center'>

        <div className="header-logo">
          <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.fcda25c.svg" alt="" />
        </div>

        <div>
          <button className='bg-yellow-400 px-4 py-1.3 rounded-2xl flex items-center gap-x-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" /></svg>
            <h3>Catalog</h3>
          </button>
        </div>

        <div className='search-bar w-2/5'>

          <input type="text" placeholder='search...' className='w-full px-4 py-3 border-yellow-600 border-2 rounded-xl active : border-yellow-600' />

        </div>

        <div className="header-middle-right gap-x-4 flex items-center  ">

          <button className="right-action-btn with-out-login">
            <span className="icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 25 24" fill="none">
                <path d="M22.8966 15.4853C20.0568 13.6955 16.7875 12.741 13.4466 12.741H13.3273C9.9625 12.741 6.69318 13.6955 3.87727 15.4853C3.23295 15.8671 2.875 16.5353 2.875 17.2751V19.3989C2.875 20.5682 3.80568 21.5228 4.975 21.5228H21.775C22.9205 21.5228 23.875 20.5682 23.875 19.3989V17.2751C23.875 16.5353 23.517 15.8671 22.8966 15.4853ZM21.9659 19.3989C21.9659 19.5182 21.8705 19.6137 21.775 19.6137H4.975C4.87955 19.6137 4.78409 19.5182 4.78409 19.3989V17.2751C4.78409 17.2035 4.83182 17.1319 4.87955 17.0842C7.40909 15.4853 10.3205 14.6501 13.3034 14.6501H13.4227C16.4057 14.6501 19.3409 15.4853 21.8466 17.108C21.8943 17.1557 21.942 17.2035 21.942 17.2989V19.3989H21.9659Z" fill="#333333"></path>
                <path d="M9.08008 5.29545V7.68182C9.08008 10.0443 11.013 11.9773 13.3755 11.9773C15.738 11.9773 17.671 10.0443 17.671 7.68182V5.29545C17.671 2.93295 15.738 1 13.3755 1C11.013 1 9.08008 2.93295 9.08008 5.29545ZM15.7619 5.29545V7.68182C15.7619 8.99432 14.688 10.0682 13.3755 10.0682C12.063 10.0682 10.9892 8.99432 10.9892 7.68182V5.29545C10.9892 3.98295 12.063 2.90909 13.3755 2.90909C14.688 2.90909 15.7619 3.98295 15.7619 5.29545Z" fill="#333333"></path>
              </svg>
            </span>
            <span className="right-action__title text-sm f-14 w-bold">Вход</span>
          </button>

          <button>
            <svg width="40" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1253 3.41305C17.848 2.86697 16.3738 2.86697 15.0965 3.41305C14.4579 3.6861 13.8777 4.0863 13.3889 4.5908L12.3747 5.63732L11.3605 4.5908C10.3734 3.57223 9.0346 3 7.63861 3C6.24261 3 4.9038 3.57223 3.91668 4.5908C2.92956 5.60938 2.375 6.99086 2.375 8.43134C2.375 13.1851 9.375 18.9995 12.3747 20.9995C15.375 18.9995 20.3645 14.5187 21.9742 10.5099C22.5034 9.19198 22.5034 7.6707 21.9742 6.35275C21.445 5.0348 20.4025 3.95915 19.1253 3.41305Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className='text-sm'>like</span>
          </button>

          <button id="header-basket" className="right-action-btn">
            <span className="icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 25 24" fill="none">
                <path fillRule="evenodd" clipRule='evenodd' d="M1.125 2.10002C1.125 1.4925 1.6175 1 2.22502 1H5.18101C5.70188 1 6.15135 1.36532 6.2578 1.8752L6.99374 5.40007H20.9253C22.1404 5.40007 23.1254 6.38506 23.1254 7.60011V12.3577C23.1254 13.3992 22.3952 14.2979 21.3757 14.5112L9.42209 17.0113C8.2327 17.26 7.06687 16.4975 6.81821 15.308L4.28693 3.20004H2.22502C1.6175 3.20004 1.125 2.70754 1.125 2.10002ZM8.74366 13.7815C8.86785 14.3763 9.4508 14.7578 10.0456 14.6335L20.0505 12.5416C20.5601 12.435 20.9253 11.9855 20.9253 11.4648V8.70012C20.9253 8.09261 20.4328 7.60011 19.8253 7.60011H7.45307L8.74366 13.7815Z" fill="#333333"></path>
                <path d="M8.12503 22.9999C9.22962 22.9999 10.1251 22.1045 10.1251 20.9999C10.1251 19.8953 9.22962 18.9999 8.12503 18.9999C7.02044 18.9999 6.125 19.8953 6.125 20.9999C6.125 22.1045 7.02044 22.9999 8.12503 22.9999Z" fill="#333333"></path><path d="M18.125 22.9999C19.2296 22.9999 20.1251 22.1045 20.1251 20.9999C20.1251 19.8953 19.2296 18.9999 18.125 18.9999C17.0204 18.9999 16.125 19.8953 16.125 20.9999C16.125 22.1045 17.0204 22.9999 18.125 22.9999Z" fill="#333333"></path>
              </svg>
            </span>
            <span className='text-sm'>korzinka</span>
          </button>

        </div>

      </div>
    </div>
  )
}

export default HeaderMiddle
