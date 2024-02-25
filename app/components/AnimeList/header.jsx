import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className=" flex flex-row justify-between p-8">
        <h1 className="text-2xl font-bold text-color-primary px-1 ">{title}</h1>
        <Link
          href={linkHref}
          className="px-2 pt-1 hover:underline hover:text-color-bright  transition-all text-color-primary md:items-center "
        >
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default Header;
