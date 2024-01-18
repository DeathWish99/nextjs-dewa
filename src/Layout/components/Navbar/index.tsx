import { FC, HTMLAttributes, PropsWithChildren } from "react";
import NavbarItem from "./NavbarItem";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default index;
