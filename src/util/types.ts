import React from "react";

export interface IconProps {
  strokeWidth?: number;
  className?: string;
}

export interface ArticleType {
  title: string;
  type: "Article" | "Education" | "Event";
  description: string;
  buttonLabel?: string;
  featured: boolean;
  slug: string;
}

export type HeroIconType = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement>
>;
