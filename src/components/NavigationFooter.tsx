import { Config } from "@/util/config";
import Link from "next/link";

export const NavigationFooter = () => {
  return (
    <div className="space-y-5 md:flex  md:space-x-6 md:justify-between xl:space-x-16">
      {Config.menuLinks.map((link) => (
        <div key={link.displayName}>
          <h2 className="text-xl lg:text-2xl font-neutra2 mb-2">
            {link.displayName}
          </h2>
          <ul className="space-y-2">
            {link.subItems.map((item) => (
              <li key={item.displayName}>
                <Link href="#" className="">
                  {item.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
