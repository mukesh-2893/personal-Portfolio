import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-2 flex items-center justify-between px-8 mx-8">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <a href="tel:+918806070072">+91-8806070072</a>
        <a
          href="https://api.whatsapp.com/send?phone=8806070072"
          target="_blank"
          rel="noreferrer"
        >
          Send Message
        </a>
      </Layout>
    </footer>
  );
};

export default Footer;
