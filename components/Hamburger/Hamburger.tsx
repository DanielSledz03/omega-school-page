export default function Hamburger({
  toggleHamburger,
  isOpen,
}: {
  toggleHamburger: () => void;
  isOpen: boolean;
}) {
  const genericHamburgerLine = `h-[3px] w-[37px] my-[4.5px] bg-white transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col w-[37px] z-[102] justify-center items-center group xl:hidden"
      onClick={toggleHamburger}
    >
      <div
        className={`${genericHamburgerLine} bg-white ${
          isOpen ? 'bg-white rotate-45 translate-y-3' : 'bg-white'
        }`}
      />
      <div
        className={`${genericHamburgerLine} bg-white ${
          isOpen ? 'opacity-0' : 'bg-white'
        }`}
      />
      <div
        className={`${genericHamburgerLine} bg-white ${
          isOpen ? 'bg-white -rotate-45 -translate-y-3' : 'bg-white'
        }`}
      />
    </button>
  );
}
