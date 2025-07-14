import Footer from "@navigation/Footer";
import Navbar from "@navigation/navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default layout;
