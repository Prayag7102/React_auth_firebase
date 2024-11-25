import React from 'react';


const NavSection = ({ items }) => {
  return (
    <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
      {items.map((item, index) => (
        <li
          key={index}
          className={
            item.isHeading
              ? 'inline-block py-2 px-3 text-white uppercase font-medium tracking-wide'
              : ''
          }
        >
          {item.isHeading ? (
            item.name
          ) : (
            <a
              href={item.link}
              className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline"
            >
              {item.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};


export default NavSection;