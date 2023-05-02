import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { CTAHeading } from "./CTAHeading";

const meta: Meta<typeof CTAHeading> = {
  title: "Components/CTAHeading",
  component: CTAHeading,
};

export default meta;
type Story = StoryObj<typeof CTAHeading>;

export const Primary: Story = {
  args: {
    title: "Title Goes Here",
  },
};
