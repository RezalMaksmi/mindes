import React from 'react'

const CardArticles = ({image, title, description}) => {
  return (
    <section className="flex flex-col lg:flex-row ">
      <div className=" shadow-lg w-[300px] xl:w-[360px] bg-[#fff] rounded-md ">
        
        <img className='object-contain' src={image} alt="" />
        <div className="p-2 ">
          <h1 className="font-semibold text-[20px]">{title}</h1>
          <p className="text-[15px]">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default CardArticles
