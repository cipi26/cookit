import Cipi from "@/ui/Cipi";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around gap-1 py-10">
      <Cipi />

      <h5 className="flex-1 text-center text-sm text-copy-light">
        © 2024 Yumy. All rights reserved.
      </h5>
    </footer>
  );
};

export default Footer;
