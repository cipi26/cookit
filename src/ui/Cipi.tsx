import Image from "next/image";
import Link from "next/link";

const Cipi = () => {
  const link = "#";

  return (
    <Link href={link} target="_blank" role="button" className="group">
      <h4 className="inline-block text-copy-light group-hover:text-copy">
        Made by
      </h4>
      <Image
        src="/logos/cipi.svg"
        alt="Cipi logo"
        width={45}
        height={24}
        className="inline-block h-auto shrink-0"
      />
    </Link>
  );
};

export default Cipi;
