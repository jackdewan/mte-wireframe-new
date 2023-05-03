import { NewsletterFooter } from "../components/NewsletterFooter";
import { MountainLineFooter } from "./assets/MountainLineFooter";
import { MountainLineFooterSm } from "./assets/MountainLineFooterSm";
import { LogoCircle } from "../components/LogoCircle";
import { FooterNavigation } from "../components/FooterNavigation";
import { LogoCircleSolid } from "./assets/LogoCircleSolid";

export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="text-aqua-800">
        <div className="hidden sm:block">
          <MountainLineFooter />
        </div>
        <div className="sm:hidden -mb-2">
          <MountainLineFooterSm />
        </div>
      </div>
      <div className="pb-12 xl:pb-16 bg-aqua-800">
        <div className="container">
          <div className="">
            <div className="mb-8 xl:mb-12 h-24 w-24 text-aqualight">
              <LogoCircleSolid />
            </div>
            <div
              className="lg:flex lg:flex-row-reverse lg:justify-between w-full
            "
            >
              <div className="mb-12 lg:-mt-10 xl:-mt-16">
                <NewsletterFooter />
              </div>
              <div>
                <FooterNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
