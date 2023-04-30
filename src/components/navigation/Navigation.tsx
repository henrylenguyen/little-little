import React from 'react'
import logo from 'assets/images/logo.png'
import { NavLink } from 'react-router-dom'
type Props = {}
interface INavList {
  id: number
  to: string
  title: string
}
const navlist: INavList[] = [
  {
    id: 1,
    to: '/',
    title: 'Trang chủ'
  },
  {
    id: 2,
    to: '/event',
    title: 'Sự kiện'
  },
  {
    id: 3,
    to: '/contact',
    title: 'Liên hệ'
  }
]
const Navigation = (props: Props) => {
  const navStyle =
    'px-[24px] transition border py-[10px] text-[18px] font-[700] leading-[22px] text-textSecondColor rounded-[30px]'
  return (
    <div className='navbar relative w-full bg-[#ED7200] '>
      <div className=' shadow-2xl w-full py-5'>
        <div className='container flex items-center justify-around'>
          <div className='logo'>
            <NavLink to={'/'}>
              <img src={logo} className='w-[120px] cursor-pointer' alt='logo' />
            </NavLink>
          </div>
          <nav className='flex items-center gap-x-10'>
            {navlist?.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? `bg-transparent  border-textSecondColor ${navStyle}` : `${navStyle} border-nav opacity-90`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
          <div className='contact '>
            <a href='tel:0123456789' className='flex items-center gap-5'>
              <div className='flex items-center justify-center rounded-full border border-textSecondColor p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#fff'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </div>
              <span className='font-[700] text-textSecondColor'>0123456789</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
