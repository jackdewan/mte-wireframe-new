import Link from "next/link";
import Disclosure from "../stories/Disclosure";
import { Config } from "../util/config";
import { DisclosureContext } from "../util/DisclosureContext";
import { useContext } from "react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (_arg1: boolean) => void;
}

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  const { openKey, setOpenKey } = useContext(DisclosureContext);
  return (
    <div
      className={`fixed left-0 top-0 bg-gray-300 h-full w-full z-10 transition-all ease-in duration-500 overflow-x-scroll pb-52 lg:hidden ${
        isMenuOpen ? "block mt-14 lg:mt-20" : "hidden"
      }`}
    >
      <div className="relative top-10 w-full">
        <Disclosure>
          {Config.menuLinks.map((link) => (
            <Disclosure.Panel
              key={link.displayName}
              title={link.displayName}
              className="p-4 border-b border-gray-200"
            >
              {link.subItems.map((subItem) => (
                <Link
                  key={subItem.displayName}
                  href={subItem.path}
                  className="px-4 py-5 bg-white"
                  onClick={() => {
                    setOpenKey(null);
                    setIsMenuOpen(false);
                  }}
                >
                  {subItem.displayName}
                </Link>
              ))}
            </Disclosure.Panel>
          ))}
        </Disclosure>
      </div>
    </div>
  );
};
