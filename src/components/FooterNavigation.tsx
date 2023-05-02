import { Config } from "../util/config";
import Link from "next/link";

export const FooterNavigation = () => {
  return (
    <div className="flex space-x-6 sm:justify-between xl:space-x-16">
      {Config.menuLinks.map((link) => (
        <div key={link.displayName}>
          <h2 className="text-xl lg:text-2xl font-neutra2 mb-2">
            {link.displayName}
          </h2>
          <ul className="space-y-2">
            {link.subItems.map((item) => (
              <li key={item.displayName}>
                <Link href={item.path} className="hover:underline">
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
