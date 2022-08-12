import React from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";
import Subscribe from "../components/subscribe";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>{children}</div>;
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
