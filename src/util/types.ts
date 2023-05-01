import React from "react";

export interface IconProps {
  strokeWidth?: number;
  className?: string;
}

export interface ArticleType {
  title: string;
  type: string;
  description: string;
  buttonLabel?: string;
  slug: string;
}

export type HeroIconType = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement>
>;
