import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Result } from "@libs/imdb/AllMovie";
import Card from "./index";
interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  resultArr: Result[];
}
type CardsComponents = FC<CardsProps> & PropsWithChildren;
const Cards: CardsComponents = ({ resultArr, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1800px] mx-auto py-4" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {resultArr.map((result, id) => (
        <Card movie={result} key={id} />
      ))}
    </div>
  );
};

export default Cards;
