import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { CardArticle } from "./CardArticle";

const meta: Meta<typeof CardArticle> = {
  title: "Components/CardArticle",
  component: CardArticle,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CardArticle>;

export const Simple: Story = {
  args: {
    data: {
      title: "Card Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "slug",
      type: "conentrate",
    },
    meta: false,
    tag: false,
  },
};

export const CardWithMeta: Story = {
  args: {
    ...Simple.args,
    meta: true,
    tag: true,
  },
};
