import Link from "next/link";

const Footer = ({link, icon}) => {
  return (
    <>
      <footer className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Link href="https://github.com/kimearwud22">
              <span className="self-center text-xl font-medium text-[#24252a] hover:text-opacity-70">
                Github: @kimearwud22
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="https://www.linkedin.com/in/moh-nur-hakim-450ba925b/">
              <span className="self-center text-xl font-medium text-[#24252a] hover:text-opacity-70">
                LinkedIn: moh nur hakim
              </span>
            </Link>
          </div>
          <div className="block w-auto">
            <div className="font-medium flex md:space-x-8 md:mt-0 text-[#24252a]">
              <Link href={link}>
                <span className="block pl-3 pr-4 text-[#24252a]">
                  {icon}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
