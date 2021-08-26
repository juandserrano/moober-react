import { Icon } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App"

const options = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    linkTo: "/navigation",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    linkTo: "/food",
  },
];

const NavOptions = () => {
  const { origin } = useContext(AppContext)
  return (

      <div className="flex justify-between">
        {origin?.address && options.map((item) => (
          <Link to={item.linkTo}>
          <div
            key={item.id}
            className={
              "p-2 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-xl flex flex-col items-center justify-around \
              cursor-pointer hover:scale-105 hover:bg-gray-300 active:scale-100 active:bg-gray-100"
            }
          >
            <img
              alt={item.title}
              className="outline-black"
              height={120}
              width={120}
              src={item.image}
            />

            <div className="flex flex-col items-center">
              <div className="mt-2 text-lg font-bold">{item.title}</div>
              <div className="p-2 bg-black mt-4 text-white flex items-center justify-center rounded-full">
              <Icon>arrow_forward</Icon>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    
  );
};

export default NavOptions;
