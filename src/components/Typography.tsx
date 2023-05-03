import Link from "next/link";
import { useMemo } from "react";

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "a" | "p";
  title?: string;
  titleSize?: "sm" | "md" | "lg";
  subtitle?: string;
  href?: string;
  noPadding?: boolean;
  children?: JSX.Element | string;
}

const getSizeClasses = (as: string, size: string) => {
  switch (as) {
    case "h1": {
      switch (size) {
        case "sm": {
          return "";
        }
        case "lg": {
          return "";
        }
        default: {
          return "text-4xl";
        }
      }
    }
    case "h2": {
      switch (size) {
        case "sm": {
          return "text-2xl md:text-3xl";
        }
        case "lg": {
          return "text-5xl md:text-7xl lg:text-8xl";
        }
        default: {
          return "text-4xl md:text-5xl lg:text-7xl";
        }
      }
    }
  }
};

const baseHeadingClasses = "capitalize";

export const Typography = ({
  as,
  title,
  titleSize = "md",
  subtitle,
  href,
  children,
}: TypographyProps) => {
  const computedClasses = useMemo(() => {
    if (as && titleSize) {
      const sizeClass = getSizeClasses(as, titleSize);
      return [sizeClass].join(" ");
    }

    return null;
  }, [titleSize]);

  if (as === "h1") {
    return (
      <h1 className={`${baseHeadingClasses} ${computedClasses} font-bold`}>
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2 className={`${baseHeadingClasses} ${computedClasses} font-bold `}>
        {children}
      </h2>
    );
  }

  if (as === "h3") {
    return (
      <h3
        className={`${baseHeadingClasses} ${computedClasses} text-xl max-w-screen-md mx-auto`}
      >
        {children}
      </h3>
    );
  }

  if (as === "a") {
    if (href) {
      return (
        <Link className="hover:underline" href={href}>
          {children}
        </Link>
      );
    }
  }
  return <p>{children}</p>;
};
