import Navbar from "./_components/Navbar/Navbar";

interface LayoutProps {
    children: React.ReactNode;
    }

const Layout = ({ children } : LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;