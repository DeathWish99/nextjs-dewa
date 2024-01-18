"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  param: string;
}
type NavbarItemComponents = FC<NavbarItemProps> & PropsWithChildren;
const NavbarItem: NavbarItemComponents = ({
  children,
  title,
  param,
  ...resProps
}) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
