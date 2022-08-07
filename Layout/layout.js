import React from "react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>{children}</div>;
      <Footer />
    </>
  );
};

export default Layout;
