import Footer from "@/features/navigation/Footer";
import Navbar from "@/features/navigation/navbar/Navbar";

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
