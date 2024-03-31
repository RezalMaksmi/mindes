import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Aksesibilitas yang Lebih Baik",
      content:
        "Memudahkan masyarakat dalam mengakses informasi dan layanan administratif kapan saja dan di mana saja, tanpa harus datang secara fisik ke kantor desa.",
    },
    { title: "Efisiensi Operasional", content: "Content for section 2..." },
    {
      title: "Peningkatan Keterlibatan Masyarakat",
      content: "Content for section 3...",
    },
    {
      title: "Penghematan Waktu dan Biaya",
      content: "Content for section 3...",
    },
    {
      title: "Peningkatan Pelayanan Publik",
      content: "Content for section 3...",
    },
  ];

  return (
    <div className="max-w-screen-md mx-2 md:mx-5 xl:mx-10 my-auto shadow-xl rounded-lg bg-white">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}>
            <div className="p-4 text-[16px] font-semibold">{item.title}</div>
            <div className="p-4">
              {activeIndex === index ? <LuChevronUp /> : <LuChevronDown />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index
                ? "max-h-96 transform opacity-100"
                : "max-h-0 transform scale-y-0 opacity-0"
            }`}>
            <div className="p-4">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
