import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { CtaContent } from "./CtaContent";

const meta: Meta<typeof CtaContent> = {
  title: "Components/CTA Content",
  component: CtaContent,
};

export default meta;
type Story = StoryObj<typeof CtaContent>;

export const Primary: Story = {
  args: {
    title: "Title Goes Here",
  },
};
