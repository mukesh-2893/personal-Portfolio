import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} flex items-center justify-between`}>
      {children}
    </div>
  );
};

export default Layout;
