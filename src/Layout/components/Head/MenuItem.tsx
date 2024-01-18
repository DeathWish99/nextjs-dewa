import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  address: string;
  title: string;
  Icon: IconType;
}
type MenuItemComponents = FC<MenuItemProps> & PropsWithChildren;
const MenuItem: MenuItemComponents = ({
  address,
  children,
  title,
  Icon,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
