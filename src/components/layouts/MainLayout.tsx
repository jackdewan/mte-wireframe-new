import { useScrollAnimate } from "../../util/useScrollAnimate";
import { HeaderCenter } from "../HeaderCenter";
import { FooterNewsletter } from "../FooterNewsletter";

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useScrollAnimate();
  return (
    <>
      <HeaderCenter />
      <div className="min-h-screen py-16 pt-14 lg:pt-20">{children}</div>
      <FooterNewsletter />
    </>
  );
};
