import Image from "next/image";

const navItems = ["SHOP", "SKILLS", "STORE", "ABOUT", "CONTACT US"];
export default function Header() {
  return (
    <header className="py-8 border-bottom-gray">
      <div className="flex flex-col w-full  container">
        <div className="flex justify-between mb-10">
          <div className="items-center flex ">
            <Image
              src="/icons/Logo.svg"
              alt="App logo"
              width={36}
              height={36}
              priority
            />
          </div>
          <div>
            <span className="fs-36 font-bolder text-center">LOGO</span>
          </div>
          <div className="icons flex justify-between gap-6 items-center">
            <div>
              <Image
                src="/icons/search-normal.svg"
                alt="Search"
                width={16}
                height={16}
              />
            </div>
            <div>
              <Image
                src="/icons/heart.svg"
                alt="Wishlisted"
                width={16}
                height={16}
              />
            </div>
            <div>
              <Image
                src="/icons/shopping-bag.svg"
                alt="Cart"
                width={16}
                height={16}
              />
            </div>
            <div>
              <Image
                src="/icons/profile.svg"
                alt="Profile"
                width={16}
                height={16}
              />
            </div>
            <div className="gap-[5px] flex items-center">
              <span className="font-bold">ENG</span>
              <Image
                className=""
                src="/icons/arrow-down.svg"
                alt="dropdown icon"
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex items-center justify-center gap-16 w-full">
            {navItems.map((item, idx) => {
              return (
                <span key={idx} className="font-bold text-xl">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
