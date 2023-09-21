import React from "react";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
function mainLayout({ children }) {
  return (
    <div className="h-full">
      <DesktopNavbar />
      <MobileNavbar />
      <main className="lg:px-60 h-full">{children}</main>
      <DesktopFooter />;
      <MobileFooter />;
    </div>
  );
}

export default mainLayout;
