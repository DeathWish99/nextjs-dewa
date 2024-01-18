import { FC, HTMLAttributes, PropsWithChildren } from "react";
import ThemeProvider from "@features/theme";
import Header from "./components/Head";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 dark:text-gray-200 text-gray-700 light:bg-white transition-colors duration-300 min-h-screen select-none">
        <Header />
        <Navbar />
        <SearchBox />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default index;
