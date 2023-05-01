import { Button } from "./Button";
import { PlaceholderImg } from "../components/Placeholder";
import { Typography } from "../components/Typography";

export interface SwitchbackProps extends SwitchbackTextProps {
  left?: boolean;
}

interface SwitchbackImageProps {
  scrollAnimate?: boolean;
}

export interface SwitchbackTextProps {
  scrollAnimate?: boolean;
  title?: string;
  titleSize?: "sm" | "md" | "lg";
  subtitle?: string;
  btnLabel?: string;
  btnPath?: string;
}

export const Image = ({ scrollAnimate }: SwitchbackImageProps) => {
  return (
    // <img
    //   className={`grayscale w-full object-cover mb-6 sm:mb-12 aspect-[4/3] lg:aspect-[3/4]`}
    //   src="https://images.unsplash.com/photo-1517025423291-770fb99ae547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    //   alt="mobile app"
    // />
    <div className="bg-gray-200 aspect-video lg:aspect-square mb-6">
      <PlaceholderImg />
    </div>
  );
};

export const Text = ({
  scrollAnimate,
  title,
  titleSize,
  subtitle,
  btnLabel,
  btnPath,
}: SwitchbackTextProps) => {
  return (
    <div className={`max-w-2xl`}>
      <div className="mb-6">
        <Typography as="h2" titleSize={titleSize} subtitle={subtitle}>
          {title ? title : "Lorem ipsum dolor sit amet"}
        </Typography>
      </div>
      <div className="mb-10">
        <Typography>{subtitle}</Typography>
      </div>
      {/* <div>
        <p className={`font-light md:text-lg dark:text-gray-400 font-serif`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div> */}
      {btnLabel ? (
        <div className="items-center sm:flex">
          <Button label={btnLabel} primary btnPath={btnPath} />
        </div>
      ) : null}
    </div>
  );
};

export const Switchback = ({
  left,
  scrollAnimate,
  title,
  titleSize = "md",
  subtitle,
  btnLabel,
  btnPath,
}: SwitchbackProps) => {
  return (
    <section
      className="dark:bg-gray-900 container pt-5 lg:pt-20 pb-10 lg:pb-20"
      // style={{ height: "100svh" }}
    >
      <div
        className={`flex ${
          left ? "flex-col" : "flex-col-reverse"
        }  justify-between items-center pt-10 sm:pt-20 lg:grid lg:grid-cols-12 lg:gap-4`}
      >
        {left ? (
          <>
            <div className="lg:col-span-4 w-full">
              <Image scrollAnimate={scrollAnimate} />
            </div>
            <div className="lg:col-start-8 lg:col-span-5 w-full">
              <Text
                scrollAnimate={scrollAnimate}
                title={title}
                subtitle={subtitle}
                btnLabel={btnLabel}
                btnPath={btnPath}
              />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-6">
              <Text
                scrollAnimate={scrollAnimate}
                title={title}
                titleSize={titleSize}
                subtitle={subtitle}
                btnLabel={btnLabel}
                btnPath={btnPath}
              />
            </div>
            <div className="lg:col-start-7 lg:col-span-6 xl:col-start-9 xl:col-span-4 w-full">
              <Image scrollAnimate={scrollAnimate} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
