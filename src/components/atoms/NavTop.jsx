import React from 'react'
import Images from '../../assets/img/Images'


const NavTop = () => {
  return (
    <div className="w-full py-3 h-[70px] bg-white flex justify-between items-center lg:px-[50px] px-[20px] shadow">
          <Images type="logo" className="bg-pink lg:h-full h-[50%] " />

          <div className="h-full rounded-full pr-5 lg:gap-2 gap-1 border-2 border-neutral-500  flex items-center">
            <div className="h-full p-1 ">  
            <Images type="profile" className="h-full w-max" />
            </div>
            <div className="flex flex-col ">
              <span className='font-semibold  text-xs'>
                Rezal Nur Syaifudin
              </span>
              <span className='text-xs text-[10px] mt-[-2px]'>rezalnurscc@gmail.com</span>
            </div>
          </div>
        </div>
  )
}

export default NavTop
