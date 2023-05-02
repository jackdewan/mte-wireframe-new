import { NewsletterFooter } from "./wire_NewsletterFooter";
import { NavigationFooter } from "./wire_NavigationFooter";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="">
      <div className="pb-12 xl:pb-16 bg-gray-100">
        <div className="container">
          <div className="">
            <div className="mb-8 xl:mb-12">
              <Logo title="Logo" />
            </div>
            <div
              className="lg:flex lg:flex-row-reverse lg:justify-between w-full
            "
            >
              <div className="mb-12 lg:-mt-10 xl:-mt-16">
                <NewsletterFooter />
              </div>
              <div>
                <NavigationFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
