import React from "react";
import Head from "next/head";
import Footer from "./Footer.jsx";
import { ContactFooter, Navbar } from ".";
const Layout = ({children}) => {
  return (
    <div className="layout">
    <Head>
      <title>Car Store</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main className="main-container">
      {children}
    </main>
    <ContactFooter />
    <footer>
      <Footer />
    </footer>
  </div>
  );
};

export default Layout;
