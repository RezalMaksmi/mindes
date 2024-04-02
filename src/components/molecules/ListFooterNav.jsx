const footerNavs = [
    {
      title: "MINDES",
      items: [
        {
          href: "/",
          name: "Tentang",
        },
        {
          href: "/tentangkami/budayakerja",
          name: "Fitur",
        },
        {
          href: "/tentangkami/sejarah",
          name: "Artikel",
        },
        {
          href: "/tentangkami/artilogo",
          name: "Kontak",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          href: "/",
          name: "mindes@mail.ac.id",
        },
        {
          href: "/",
          name: "021323252 (Telp)",
        },
        {
          href: "/",
          name: "08509098000 (WhatsApp)",
        },
        {
          href: "/",
          name: "Or more contact",
        },
      ],
    },
  ];
  
  const ListFooterNav = () => {
    return (
      <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
        {footerNavs.map((item, idx) => (
          <ul className="space-y-4" key={idx}>
            <h4 className="text-white font-medium">{item.title}</h4>
            {item.items.map((element, idx) => (
              <li key={idx}>
                <a
                  href={element.href}
                  className="hover:underline hover:text-orange-500">
                  {element.name}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    );
  };
  
  export default ListFooterNav;