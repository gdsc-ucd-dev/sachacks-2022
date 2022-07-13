/**components */
import Footer from "./Footer";
import Header from "./Header";

const Layout: LayoutComponent = ({ children }) => {
  return (
    <div id="layout" className="w-full relative overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
