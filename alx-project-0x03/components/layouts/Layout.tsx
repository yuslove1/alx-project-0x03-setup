import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

// Defines the properties for the Layout component.
interface LayoutProps {
  children: ReactNode; // Children to be rendered within the layout (the main content of the page).
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // React Fragment to wrap multiple top-level elements.
    <>
      <Header />
      {/* Main content area */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;