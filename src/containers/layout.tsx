import {FC, ReactNode} from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-white duration-500 ease-smooth dark:bg-zinc-900">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
